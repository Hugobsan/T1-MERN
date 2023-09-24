import { Table } from "@radix-ui/themes";

export type ColumnType = {
  name: string;
  key: string;
  dataIndex: string;
  render?: (value: any, record: any, index: number) => React.ReactNode;
};

interface CTableProps {
  columns: Array<ColumnType>;
  data: any;
}

export default function CTable({ columns, data }: CTableProps) {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          {columns.map((column) => (
            <Table.ColumnHeaderCell key={column.key}>
              {column.name}
            </Table.ColumnHeaderCell>
          ))}
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {data.map((rowData: any, rowIndex: number) => (
          <Table.Row key={rowData.id}>
            {columns.map(({ key, render = undefined, dataIndex }, index) => {
              const Cell = !index ? Table.RowHeaderCell : Table.Cell;

              return (
                <Cell key={key}>
                  {render?.(rowData[dataIndex], rowData, rowIndex) ||
                    rowData[dataIndex]}
                </Cell>
              );
            })}
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>
  );
}