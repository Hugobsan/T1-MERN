import { Button, Container, DropdownMenu, AlertDialog, Flex, Text, Heading, TextField, Box} from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import CTable, { ColumnType } from "./components/Table/Table";
import { useState } from "react";

const data = [
  { id: 1, name: "Nome 1" },
  { id: 2, name: "Nome 2" },
];

function App() {
  const [isExclusionModalOpen, setIsExclusionModalOpen] = useState(false);

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
      align: "right",
      render: (value, record, index) => {
        return (<DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="soft"> ... </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            <DropdownMenu.Item>Visualizar</DropdownMenu.Item>
            <DropdownMenu.Item>Editar</DropdownMenu.Item>
            <DropdownMenu.Separator />

            <DropdownMenu.Item color="red" onClick={() => setIsExclusionModalOpen(true)}>
              <Button variant="soft"> Excluir </Button>
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>);
      },
    },
  ];

  return (
    <>
      <Box>
        <Container size="4" p="4">
          <Flex>
            <Heading>Tutoriais</Heading>
            <TextField.Root variant="surface">
              <TextField.Slot>
                <MagnifyingGlassIcon height="16" width="16"/>
              </TextField.Slot>
              <TextField.Input size="3" placeholder="Pesquise pelo título do tutorial" />
            </TextField.Root>

            <CTable columns={columns} data={data} />
          </Flex>
        </Container>
      </Box>

      <AlertDialog.Root open={isExclusionModalOpen}>
        <AlertDialog.Content style={{ maxWidth: 450 }}>
          <AlertDialog.Title>Excluir Tutorial</AlertDialog.Title>
          <AlertDialog.Description size="2">
            Tem certeza que deseja excluir? Essa ação não pode ser desfeita. Nem adianta chorar no suporte depois
          </AlertDialog.Description>

          <Flex gap="3" mt="4" justify="end">
            <AlertDialog.Cancel>
              <Button variant="soft" color="gray" onClick={() => { setIsExclusionModalOpen(false) }}>
                Cancelar
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action>
              <Button variant="solid" color="red" onClick={() => { setIsExclusionModalOpen(false) }}>
                Excluir
              </Button>
            </AlertDialog.Action>
          </Flex>
        </AlertDialog.Content>
      </AlertDialog.Root>
    </>

  );
}

export default App;