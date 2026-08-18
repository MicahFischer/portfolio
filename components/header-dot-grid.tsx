"use client";

import { useEffect, useRef } from "react";

export function HeaderDotGrid({
  interactive = true,
  variant = "hero",
}: {
  interactive?: boolean;
  variant?: "hero" | "card";
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvasNode = canvasRef.current;
    if (!canvasNode) return;

    const ctxNode = canvasNode.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!ctxNode) return;

    const canvas: HTMLCanvasElement = canvasNode;
    const ctx: CanvasRenderingContext2D = ctxNode;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;
    let hoverMix = 0;
    let hovering = false;
    let sx = new Float32Array(0);
    let sy = new Float32Array(0);
    let live = new Uint8Array(0);
    let colCount = 0;
    let rowCount = 0;
    let cols = 0;
    const spacing = 42;
    const rowStart = -16;
    const rowEnd = 48;

    function resize() {
      const parent = canvas.parentElement;
      if (!parent) return;
      dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      width = parent.clientWidth;
      height = parent.clientHeight;
      targetX = currentX = width / 2;
      targetY = currentY = height * 0.45;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      cols = Math.ceil(width / spacing) + 28;
      colCount = cols * 2 + 1;
      rowCount = rowEnd - rowStart + 1;
      const count = colCount * rowCount;
      sx = new Float32Array(count);
      sy = new Float32Array(count);
      live = new Uint8Array(count);
    }

    function onMove(event: PointerEvent) {
      const rect = canvas.getBoundingClientRect();
      targetX = event.clientX - rect.left;
      targetY = event.clientY - rect.top;
      hovering =
        targetX >= -40 &&
        targetX <= width + 40 &&
        targetY >= -40 &&
        targetY <= height + 40;
    }

    function draw(now: number) {
      const time = interactive && !reducedMotion ? now / 1000 : 0;
      const idleX = width * (0.5 + 0.3 * Math.sin(time * 0.35));
      const idleY = height * (0.42 + 0.22 * Math.cos(time * 0.27));

      if (interactive && !reducedMotion) {
        hoverMix += ((hovering ? 1 : 0) - hoverMix) * 0.08;
        currentX +=
          (hoverMix * targetX + (1 - hoverMix) * idleX - currentX) * 0.16;
        currentY +=
          (hoverMix * targetY + (1 - hoverMix) * idleY - currentY) * 0.16;
      } else {
        hoverMix = 0;
        currentX = width / 2;
        currentY = height * 0.45;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);

      if (variant === "hero") {
        const wash = ctx.createLinearGradient(0, height, width, 0);
        wash.addColorStop(0, "rgba(44, 181, 160, 0.18)");
        wash.addColorStop(0.45, "rgba(34, 148, 172, 0.12)");
        wash.addColorStop(1, "rgba(24, 116, 184, 0.16)");
        ctx.fillStyle = wash;
        ctx.fillRect(0, 0, width, height);
      }

      if (interactive && hoverMix > 0.01) {
        const glow = ctx.createRadialGradient(
          currentX,
          currentY,
          0,
          currentX,
          currentY,
          Math.max(width, height) * 0.58,
        );
        glow.addColorStop(0, "rgba(44, 181, 160, 0.32)");
        glow.addColorStop(0.4, "rgba(24, 116, 184, 0.14)");
        glow.addColorStop(1, "rgba(24, 116, 184, 0)");
        ctx.globalAlpha = hoverMix;
        ctx.fillStyle = glow;
        ctx.fillRect(0, 0, width, height);
        ctx.globalAlpha = 1;
      }

      const rotX = 0.98;
      const rotY = 0.08;
      const camZ = 520;
      const fov = 580;
      const originX = width / 2;
      const originY = height * 0.78;
      const twoSigmaSq = 2 * 168 * 168;
      const liftAmp = 26 + hoverMix * 118;
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      live.fill(0);

      for (let row = 0; row < rowCount; row += 1) {
        const worldZ = (row + rowStart) * spacing;
        for (let col = 0; col < colCount; col += 1) {
          const worldX = (col - cols) * spacing;
          const xYaw = worldX * cosY - worldZ * sinY;
          const zYaw = worldX * sinY + worldZ * cosY;
          const flatDepth = zYaw * cosX + camZ;
          if (flatDepth < 40) continue;

          const index = row * colCount + col;
          const flatScale = fov / flatDepth;
          const dx = originX + xYaw * flatScale - currentX;
          const dy = originY + -zYaw * sinX * flatScale - currentY;
          const rise =
            interactive && !reducedMotion
              ? Math.exp(-(dx * dx + dy * dy) / twoSigmaSq)
              : 0;
          const wave =
            interactive && !reducedMotion
              ? Math.sin(time * 0.9 + worldX * 0.028 + worldZ * 0.022) * 5
              : 0;
          const y = liftAmp * rise + wave;
          const depth = y * sinX + zYaw * cosX + camZ;
          if (depth < 40) continue;

          const scale = fov / depth;
          const screenX = originX + xYaw * scale;
          const screenY = originY + (y * cosX - zYaw * sinX) * scale;

          if (
            screenX < -40 ||
            screenX > width + 40 ||
            screenY < -40 ||
            screenY > height + 40
          ) {
            continue;
          }

          sx[index] = screenX;
          sy[index] = screenY;
          live[index] = 1;
        }
      }

      ctx.beginPath();
      for (let row = 0; row < rowCount; row += 1) {
        let drawing = false;
        const rowOffset = row * colCount;
        for (let col = 0; col < colCount; col += 1) {
          const i = rowOffset + col;
          if (!live[i]) {
            drawing = false;
            continue;
          }
          if (drawing) ctx.lineTo(sx[i], sy[i]);
          else ctx.moveTo(sx[i], sy[i]);
          drawing = true;
        }
      }
      for (let col = 0; col < colCount; col += 1) {
        let drawing = false;
        for (let row = 0; row < rowCount; row += 1) {
          const i = row * colCount + col;
          if (!live[i]) {
            drawing = false;
            continue;
          }
          if (drawing) ctx.lineTo(sx[i], sy[i]);
          else ctx.moveTo(sx[i], sy[i]);
          drawing = true;
        }
      }

      ctx.lineJoin = "round";
      ctx.lineCap = "round";
      ctx.lineWidth = 1;
      ctx.strokeStyle =
        variant === "card" ? "rgba(255, 255, 255, 0.28)" : "rgba(0, 0, 0, 0.14)";
      ctx.stroke();

      if (interactive) {
        frame = window.requestAnimationFrame(draw);
      }
    }

    resize();
    window.addEventListener("resize", onResize);
    const parent = canvas.parentElement;
    const observer = parent
      ? new ResizeObserver(() => {
          resize();
          if (!interactive) draw(0);
        })
      : null;
    observer?.observe(parent ?? canvas);

    if (interactive) {
      window.addEventListener("pointermove", onMove, { passive: true });
      frame = window.requestAnimationFrame(draw);
    } else {
      draw(0);
    }

    function onResize() {
      resize();
      if (!interactive) draw(0);
    }

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("resize", onResize);
      observer?.disconnect();
    };
  }, [interactive, variant]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
