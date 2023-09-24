import { Container } from "@radix-ui/themes";
import CTable, { ColumnType } from "./components/Table/Table";

const columns: ColumnType[] = [
  {
    name: "ID",
    key: "id",
    dataIndex: "id",
  },
  {
    name: "Nome",
    key: "name",
    dataIndex: "name",
  },
  {
    name: "Ações",
    key: "actions",
    dataIndex: "id",
    render: (value, record, index) => {
      return <div>{value}</div>;
    },
  },
];

const data = [
  { id: 1, name: "Nome 1" },
  { id: 2, name: "Nome 2" },
];

function App() {
  return (
    <Container size="4">
      <CTable columns={columns} data={data} />
    </Container>
  );
}

export default App;