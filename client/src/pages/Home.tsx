import { useState, useEffect } from "react";
import axios from "axios";
import { Layout } from "../components/Layout";
import Logo from "/assets/logo.webp";
import { RestaurantProps } from "../type";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [tables, setTables] = useState<RestaurantProps[]>([]);
  const [selectedTableId, setSelectedTableId] = useState<string | null>(null);
  const [currentName, setCurrentName] = useState("");
  const [isTableActive, setIsTableActive] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3333/tables")
      .then((response) => {
        const filteredTables = response.data.filter(
          (table: RestaurantProps) => !table.isActive
        );
        setTables(filteredTables);
      })
      .catch((error) => {
        console.error("Erro ao obter as mesas:", error);
      });
  }, []);

  const handleNameChange = () => {
    if (selectedTableId === null) {
      console.error("Nenhuma mesa selecionada");
      return;
    }

    axios
      .put(`http://localhost:3333/tables/${selectedTableId}/name`, {
        name: currentName,
      })
      .then(() => {
        console.log("Nome da mesa alterado com sucesso");
        setIsTableActive(true);
        navigate(`/order/${selectedTableId}`);
      })
      .catch((error) => {
        console.error("Erro ao alterar o nome da mesa:", error);
      });
  };

  const handleIsActiveChange = () => {
    axios
      .put(`http://localhost:3333/tables/${selectedTableId}/isActive`, {
        isActive: true,
      })
      .then(() => {
        console.log("Propriedade isActive da mesa alterada com sucesso");
        setIsTableActive(true);
        navigate(`/order/${selectedTableId}`);
      })
      .catch((error) => {
        console.error("Erro ao alterar a propriedade isActive da mesa:", error);
      });
  };

  const handleChanges = () => {
    handleNameChange()
    handleIsActiveChange()
  }

  const handleTableSelection = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedTableId(event.target.value);
  };

  console.log(isTableActive);
  
  return (
    <Layout>
      <main className="max-w-screen-md h-screen grid grid-cols-2 gap-16 m-auto">
        <div className="gap-6 flex flex-col justify-center">
          <img src={Logo} alt="Logo da Cafeteria" className="w-40 h-40" />
          <h1 className="text-4xl font-semibold">
            O café do jeitinho que você quiser.
          </h1>
          <p className="text-sm">
            Oh Grão! Aqui você encontra cafés importados de vários lugares do
            mundo!
          </p>
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-lg mb-4">#1 - Selecione em qual mesa está</h2>

          <div className="gap-4 grid grid-cols-4 mb-8">
            {tables.map((table) => (
              <label
                key={table.id}
                htmlFor={`table-${table.id}`}
                className={`cursor-pointer text-2xl flex items-center justify-center p-4 rounded-xl border ${
                  selectedTableId === table.id
                    ? "border-teal-700 bg-teal-950"
                    : "border-teal-900"
                } hover:border-teal-700`}
              >
                <input
                  type="radio"
                  name="table"
                  id={`table-${table.id}`}
                  value={table.id}
                  checked={selectedTableId === table.id}
                  onChange={handleTableSelection}
                  className="hidden"
                />
                {table.command}
              </label>
            ))}
          </div>

          <h2 className="text-lg mb-4">#2 - Insira seu nome</h2>

          <input
            type="text"
            value={currentName}
            placeholder="Digite seu nome"
            onChange={(e) => setCurrentName(e.target.value)}
            className="mb-4 py-3 px-4 bg-teal-950 border border-teal-700 rounded-md"
          />

          {currentName !== "" && (
            <Button color="green" text="Começar" onClick={handleChanges} />
          )}
        </div>
      </main>
    </Layout>
  );
}
