import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RestaurantProps } from "../type";
import { Clock, Coffee, HourglassMedium } from "@phosphor-icons/react";
import { Button } from "../components/Button";

export function Wait() {
  const [table, setTable] = useState<RestaurantProps | null>(null);
  const { id } = useParams<{ id: string }>();

  const navigate = useNavigate();

  const getTable = () => {
    axios
      .get(`http://localhost:3333/tables/${id}/command`)
      .then((response) => {
        setTable(response.data);
      })
      .catch((error) => {
        console.error("Erro ao obter as mesas:", error);
      });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      getTable();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (!table) {
    return (
      <div className="gap-2 h-screen w-screen flex items-center justify-center">
        Aguarde... <Clock size={20} />
      </div>
    );
  }

  return (
    <div className="gap-8 h-screen flex flex-col items-center justify-center">
      {table.status === "pending" && (
        <>
          <h1 className="text-2xl">Pedido foi criado com sucesso!</h1>
          <div className="gap-2 flex items-center">
            <span>Aguarde! O Chefe de cozinha atenderá o seu pedido</span>
            <HourglassMedium size={20} />
          </div>
        </>
      )}
      {table.status === "preparing" && (
        <>
          <h1 className="text-2xl">Seu pedido está em preparo!</h1>
          <div className="gap-2 flex items-center">
            <span>Em breve seu pedido será entregue</span>
            <Clock size={20} />
          </div>
        </>
      )}
      {table.status === "delivered" && (
        <>
          <h1 className="text-2xl">Pedido entregue!</h1>
          <div className="gap-2 flex items-center">
            <span>Bom café!</span>
            <Coffee size={20} />
          </div>
          <Button color="green" text="Fazer novo pedido" onClick={() => navigate("/")} />
        </>
      )}
    </div>
  );
}
