import { CookingPot, PaperPlaneTilt } from "@phosphor-icons/react";
import { Button } from "../components/Button";
import { HeaderRestaurant } from "../components/HeaderRestaurant";
import { Layout } from "../components/Layout";
import { useEffect, useState } from "react";
import axios from "axios";
import { RestaurantProps } from "../type";

export function Kitchen() {
  const [tables, setTables] = useState<RestaurantProps[]>([]);

  const fetchTables = () => {
    axios
      .get<RestaurantProps[]>("http://localhost:3333/tables")
      .then((response) => {
        const filteredTables = response.data.filter(
          (table) => table.status === "pending" || "preparing"
        );

        if (filteredTables.length > 0) {
          setTables(filteredTables);
        }
      })
      .catch((error) => {
        console.error("Erro ao obter as mesas:", error);
      });
  };

  function handlePrepare(tableId: string | undefined) {
    if (!tableId) {
      console.error("ID da mesa não fornecido");
      return;
    }

    const tableIndex = tables.findIndex((table) => table.id === tableId);
    if (tableIndex === -1) {
      console.error("Mesa não encontrada");
      return;
    }

    axios
      .put(`http://localhost:3333/tables/${tableId}/status`, {
        status: "preparing",
      })
      .then(() => {
        fetchTables();
      })
      .catch((error) => {
        console.error("Erro ao alterar o status do pedido:", error);
      });
  }

  function handleDeliver(tableId: string | undefined) {
    if (!tableId) {
      console.error("ID da mesa não fornecido");
      return;
    }

    const tableIndex = tables.findIndex((table) => table.id === tableId);
    if (tableIndex === -1) {
      console.error("Mesa não encontrada");
      return;
    }

    const updatedTable = {
      ...tables[tableIndex],
      status: "delivered",
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

    axios
      .put(`http://localhost:3333/tables/${tableId}/sp`, updatedTable)
      .then(() => {
        const updatedTables = tables.filter((table) => table.id !== tableId);
        setTables(updatedTables);
      })
      .catch((error) => {
        console.error("Erro ao atualizar a mesa:", error);
      });
  }

  useEffect(() => {
    fetchTables();

    const interval = setInterval(() => {
      fetchTables();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Layout>
      <HeaderRestaurant sector="Área da Cozinha" />

      <main className="gap-8 flex flex-col">
        <header>
          <p>
            {tables.length <= 1
              ? `${tables.length} mesa ativa`
              : `${tables.length} mesas ativas`}
          </p>
        </header>

        <section className="gap-8 grid lg:grid-cols-5 sm:grid-cols-3">
          {tables.map((table, index) => (
            <div
              key={`${table.id}-${index}`}
              className="flex flex-col p-4 border border-teal-900 rounded-md"
            >
              <h2 className="text-xl text-center">Mesa {table.command}</h2>

              <table className="table-fixed mb-4">
                <thead>
                  <tr>
                    <th className="w-1/4 py-2 uppercase text-center">Nome</th>
                    <th className="w-1/4 py-2 uppercase text-center">Qnt</th>
                  </tr>
                </thead>
                <tbody>
                  {table.coffe1 !== 0 && (
                    <tr>
                      <td className="text-center">Café Kopi</td>
                      <td className="text-center">{table.coffe1}</td>
                    </tr>
                  )}
                  {table.coffe2 !== 0 && (
                    <tr>
                      <td className="text-center">Café Jamaica</td>
                      <td className="text-center">{table.coffe2}</td>
                    </tr>
                  )}
                  {table.coffe3 !== 0 && (
                    <tr>
                      <td className="text-center">Café Black</td>
                      <td className="text-center">{table.coffe3}</td>
                    </tr>
                  )}
                  {table.coffe4 !== 0 && (
                    <tr>
                      <td className="text-center">Café Hacienda</td>
                      <td className="text-center">{table.coffe4}</td>
                    </tr>
                  )}
                  {table.coffe5 !== 0 && (
                    <tr>
                      <td className="text-center">Café Jacu</td>
                      <td className="text-center">{table.coffe5}</td>
                    </tr>
                  )}
                  {table.coffe6 !== 0 && (
                    <tr>
                      <td className="text-center">Café Saint</td>
                      <td className="text-center">{table.coffe6}</td>
                    </tr>
                  )}
                  {table.coffe7 !== 0 && (
                    <tr>
                      <td className="text-center">Café Finca</td>
                      <td className="text-center">{table.coffe7}</td>
                    </tr>
                  )}
                  {table.capuccino1 !== 0 && (
                    <tr>
                      <td className="text-center">Capuccino</td>
                      <td className="text-center">{table.capuccino1}</td>
                    </tr>
                  )}
                  {table.capuccino2 !== 0 && (
                    <tr>
                      <td className="text-center">C. Canela</td>
                      <td className="text-center">{table.capuccino2}</td>
                    </tr>
                  )}
                  {table.frapuccino1 !== 0 && (
                    <tr>
                      <td className="text-center">Frapuccino</td>
                      <td className="text-center">{table.frapuccino1}</td>
                    </tr>
                  )}
                  {table.frapuccino2 !== 0 && (
                    <tr>
                      <td className="text-center">F. Chantilly</td>
                      <td className="text-center">{table.frapuccino2}</td>
                    </tr>
                  )}
                </tbody>
              </table>
              {table.status === "pending" && (
                <>
                  <Button
                    type="button"
                    color="yellow"
                    text="Preparar"
                    onClick={() => handlePrepare(table.id)}
                  >
                    <CookingPot size={18} />
                  </Button>
                </>
              )}
              {table.status === "preparing" && (
                <>
                  <Button
                    type="button"
                    color="green"
                    text="Entregar"
                    onClick={() => handleDeliver(table.id)}
                  >
                    <PaperPlaneTilt size={18} />
                  </Button>
                </>
              )}
            </div>
          ))}
        </section>
      </main>
    </Layout>
  );
}
