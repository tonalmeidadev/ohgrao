import axios from "axios";
import { useState, useEffect } from "react";
import { HeaderRestaurant } from "../components/HeaderRestaurant";
import { Layout } from "../components/Layout";
import { DialogRemoveItem } from "../components/DialogRemoveItem";
import { DialogAddItem } from "../components/DialogAddItem";
import { Button } from "../components/Button";

interface RestaurantProps {
  id?: string;
  command: number;
  isActive: boolean;
  status: string;
  name: string;
  coffe1: number;
  coffe2: number;
  coffe3: number;
  coffe4: number;
  coffe5: number;
  coffe6: number;
  coffe7: number;
  capuccino1: number;
  capuccino2: number;
  frapuccino1: number;
  frapuccino2: number;
}

export function Restaurant() {
  const [tables, setTables] = useState<RestaurantProps[]>([]);

  useEffect(() => {
    fetchTables();
  }, []);

  async function fetchTables() {
    try {
      const response = await axios.get("http://localhost:3333/tables");
      setTables(response.data);
    } catch (error) {
      console.log("Erro ao buscar as mesas:", error);
    }
  }

  const handleRemoveTable = async (index: number) => {
    const table = tables[index];
    const updatedTables = [...tables];
    updatedTables.splice(index, 1);
    setTables(updatedTables);

    try {
      await axios.delete(`http://localhost:3333/tables/${table.id}`);
    } catch (error) {
      console.log("Erro ao remover a mesa:", error);
      setTables([...updatedTables, table]);
    }
  };

  const handleAddTable = async () => {
    const inputField = document.getElementById(
      "table-number"
    ) as HTMLInputElement;
    const command = parseInt(inputField.value);

    const newTable: RestaurantProps = {
      command,
      isActive: false,
      status: "open",
      name: "",
      coffe1: 0,
      coffe2: 0,
      coffe3: 0,
      coffe4: 0,
      coffe5: 0,
      coffe6: 0,
      coffe7: 0,
      capuccino1: 0,
      capuccino2: 0,
      frapuccino1: 0,
      frapuccino2: 0,
    };

    try {
      const response = await axios.post(
        "http://localhost:3333/tables",
        newTable
      );
      setTables((prevTables) => [...prevTables, response.data]);
      inputField.value = "";
    } catch (error) {
      console.log("Erro ao adicionar a mesa:", error);
    }
  };

  const handleReleaseTable = async (tableId: string) => {
    try {
      const updatedData = {
        status: "open",
        coffe1: 0,
        coffe2: 0,
        coffe3: 0,
        coffe4: 0,
        coffe5: 0,
        coffe6: 0,
        coffe7: 0,
        capuccino1: 0,
        capuccino2: 0,
        frapuccino1: 0,
        frapuccino2: 0,
      };
  
      await axios.put(`http://localhost:3333/tables/${tableId}/sp`, updatedData);
      await axios.put(`http://localhost:3333/tables/${tableId}/isActive`, { isActive: false });
      fetchTables();
    } catch (error) {
      console.log("Erro ao liberar a mesa:", error);
    }
  };
  

  return (
    <Layout>
      <HeaderRestaurant sector="Área do Gerente/Balconista" />

      <main className="gap-8 flex flex-col">
        <header>
          <DialogAddItem add={handleAddTable} />
        </header>

        <table className="table-fixed">
          <thead>
            <tr>
              <th className="w-1/4 py-2 uppercase text-start">Número</th>
              <th className="w-1/4 py-2 uppercase text-start">Status</th>
              <th className="w-1/4 py-2 uppercase text-start">Pedido</th>
              <th className="w-1/4 py-2 uppercase text-start">Nome</th>
              <th className="w-1/4 py-2 uppercase text-end">#</th>
            </tr>
          </thead>
          <tbody>
            {tables.map((table, index) => (
              <tr key={table.id}>
                <td className="py-2 pr-4 text-start border-b border-teal-900">
                  {table.command}
                </td>
                <td
                  className={`py-2 pr-4 text-star border-b border-teal-900 ${
                    table.isActive ? "text-red-500" : "text-teal-500"
                  }`}
                >
                  {table.isActive ? "Mesa em uso" : "Mesa livre"}
                </td>
                <td
                  className={`py-2 pr-4 text-star border-b border-teal-900 ${
                    table.status === "preparing" && "text-yellow-600"
                  } ${table.status === "delivered" && "text-blue-400"}`}
                >
                  {table.status === "open" && "À fazer"}
                  {table.status === "ordering" && "Fazendo"}
                  {table.status === "pending" && "À espera"}
                  {table.status === "preparing" && "Em preparo"}
                  {table.status === "delivered" && "Entregue"}
                </td>
                <td className="py-2 pr-4 text-start border-b border-teal-900">
                  {table.name === "" ? "Sem nome" : table.name}
                </td>
                <td className="gap-4 flex justify-end py-2 text-end border-b border-teal-900">
                  {table.status === "delivered" && (
                    <Button
                      color="green"
                      text="Liberar"
                      onClick={() => table.id && handleReleaseTable(table.id)}
                    />
                  )}
                  <DialogRemoveItem
                    command={table.command}
                    remove={() => handleRemoveTable(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </Layout>
  );
}
