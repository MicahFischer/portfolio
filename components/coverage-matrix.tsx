import { Icon } from "@/components/icon";

const groupOptions = [
  "Client",
  "Labor Cat.",
  "Specialty",
  "Labor Cat. + Specialty",
] as const;

const columns = ["None", ...groupOptions] as const;

const cellClass =
  "h-14 overflow-hidden border-r border-b border-foreground/15 px-2 align-middle font-sans text-[12px] leading-tight font-bold text-balance text-foreground last:border-r-0";

function isValid(row: string, column: string) {
  return column === "None" || column !== row;
}

export function CoverageMatrix() {
  return (
    <div className="w-full min-w-0 overflow-hidden rounded-[12px] border border-foreground/15 bg-background shadow-[0_6px_20px_rgba(15,23,42,0.06)]">
      <table className="w-full table-fixed border-collapse text-left">
        <caption className="sr-only">
          Valid grouping combinations for the Planning Coverage Matrix. The same
          field cannot be used for both grouping levels, producing 16 valid
          configurations.
        </caption>
        <colgroup>
          {Array.from({ length: 6 }, (_, index) => (
            <col key={index} className="w-[16.666%]" />
          ))}
        </colgroup>
        <thead>
          <tr className="h-14">
            <th scope="col" className={`${cellClass} text-left`}>
              Group by
            </th>
            {columns.map((column) => (
              <th key={column} scope="col" className={`${cellClass} text-center`}>
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {groupOptions.map((row, rowIndex) => {
            const lastRow = rowIndex === groupOptions.length - 1;
            return (
              <tr key={row} className="h-14">
                <th
                  scope="row"
                  className={`${cellClass} text-left ${lastRow ? "border-b-0" : ""}`}
                >
                  {row}
                </th>
                {columns.map((column) => {
                  const valid = isValid(row, column);
                  return (
                    <td
                      key={`${row}-${column}`}
                      className={`${cellClass} text-center ${lastRow ? "border-b-0" : ""} ${
                        valid ? "bg-foreground/[0.06]" : "bg-background"
                      }`}
                    >
                      {valid ? (
                        <>
                          <Icon
                            name="check"
                            size={28}
                            className="mx-auto text-foreground"
                          />
                          <span className="sr-only">Valid</span>
                        </>
                      ) : (
                        <span className="sr-only">Not valid</span>
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
