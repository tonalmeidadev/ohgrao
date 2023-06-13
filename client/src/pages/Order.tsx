import { useNavigate, useParams } from "react-router-dom";
import { HeaderClient } from "../components/HeaderClient";
import { useEffect, useState } from "react";
import axios from "axios";

import capuccino1Image from "/assets/capuccino.webp";
import capuccino2Image from "/assets/canela.webp";
import coffe1Image from "/assets/luwak.webp";
import coffe2Image from "/assets/jamaica.webp";
import coffe3Image from "/assets/black.webp";
import coffe4Image from "/assets/hacienda.webp";
import coffe5Image from "/assets/jacu.webp";
import coffe6Image from "/assets/helena.webp";
import coffe7Image from "/assets/injerto.webp";
import frapuccino1Image from "/assets/frapuccino.webp";
import frapuccino2Image from "/assets/chantilly.webp";
import { DialogConfirmOrder } from "../components/DialogConfirmOrder";

export function Order() {
  const [productQuantities, setProductQuantities] = useState<{
    [key: string]: number;
  }>({});
  const [total, setTotal] = useState<number>(0);
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:3333/tables/${id}/command`)
      .then((response) => {
        const quantities: { [key: string]: number } = {};

        Object.keys(response.data).forEach((key) => {
          if (!["id", "command", "isActive", "status", "name"].includes(key)) {
            quantities[key] = response.data[key];
          }
        });

        setProductQuantities(quantities);
      })
      .catch((error) => {
        console.error("Erro ao obter as mesas:", error);
      });
  }, [id]);

  useEffect(() => {
    const calculatedTotal = Object.keys(productQuantities).reduce(
      (acc, product) => {
        return acc + productQuantities[product] * getProductPrice(product);
      },
      0
    );
    setTotal(calculatedTotal);
  }, [productQuantities]);

  const getProductPrice = (product: string): number => {
    const productPrices: { [key: string]: number } = {
      capuccino1: 22.99,
      capuccino2: 22.99,
      coffe1: 13.99,
      coffe2: 13.99,
      coffe3: 13.99,
      coffe4: 13.99,
      coffe5: 13.99,
      coffe6: 13.99,
      coffe7: 13.99,
      frapuccino1: 22.99,
      frapuccino2: 22.99,
    };

    return productPrices[product] || 0;
  };

  const getProductName = (product: string): string => {
    const productNames: { [key: string]: string } = {
      capuccino1: "Capuccino",
      capuccino2: "Capuccino sem canela",
      coffe1: "Café Kopi Luwak",
      coffe2: "Café Jamaica Blue Montain",
      coffe3: "Café Black Ivory",
      coffe4: "Café Hacienda la Esmeralda",
      coffe5: "Café Jacu Bird",
      coffe6: "Café Saint Helena",
      coffe7: "Café Finca El Injerto",
      frapuccino1: "Frapuccino",
      frapuccino2: "Frapuccino sem chantilly",
    };

    return productNames[product] || "";
  };

  const getProductDescription = (product: string): string => {
    const productDescriptions: { [key: string]: string } = {
      capuccino1: "Delicioso capuccino com canela.",
      capuccino2: "Capuccino sem canela.",
      coffe1: "Café Kopi Luwak, um dos cafés mais raros e caros do mundo.",
      coffe2: "Café Jamaica Blue Montain, um café suave e aromático.",
      coffe3:
        "Café Black Ivory, feito a partir de grãos digeridos por elefantes.",
      coffe4: "Café Hacienda la Esmeralda, um café exótico e premiado.",
      coffe5:
        "Café Jacu Bird, produzido a partir de grãos consumidos e expelidos por pássaros.",
      coffe6: "Café Saint Helena, um café único e saboroso.",
      coffe7: "Café Finca El Injerto, um café de qualidade excepcional.",
      frapuccino1: "Frapuccino com chantilly e cobertura de chocolate.",
      frapuccino2: "Frapuccino sem chantilly, para quem prefere menos doce.",
    };

    return productDescriptions[product] || "";
  };

  const productImages: { [key: string]: string } = {
    capuccino1: capuccino1Image,
    capuccino2: capuccino2Image,
    coffe1: coffe1Image,
    coffe2: coffe2Image,
    coffe3: coffe3Image,
    coffe4: coffe4Image,
    coffe5: coffe5Image,
    coffe6: coffe6Image,
    coffe7: coffe7Image,
    frapuccino1: frapuccino1Image,
    frapuccino2: frapuccino2Image,
  };

  const handleIncrement = (product: string) => {
    setProductQuantities((prevQuantities) => ({
      ...prevQuantities,
      [product]: prevQuantities[product] + 1,
    }));
  };

  const handleDecrement = (product: string) => {
    if (productQuantities[product] > 0) {
      setProductQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product]: prevQuantities[product] - 1,
      }));
    }
  };

  const handleOrderSubmit = () => {
    const updatedQuantities: { [key: string]: number } = {};

    Object.keys(productQuantities).forEach((product) => {
      updatedQuantities[product] = productQuantities[product];
    });

    axios
      .put(`http://localhost:3333/tables/${id}/sp`, updatedQuantities)
      .then(() => {
        console.log("success");
      })
      .catch((error) => {
        console.error("Erro ao enviar o pedido:", error);
      });
  };

  const handleIsActiveChange = () => {
    axios
      .put(`http://localhost:3333/tables/${id}/status`, {
        status: "pending",
      })
      .then(() => {
        console.log("Propriedade status da mesa alterada com sucesso");
        navigate(`/success/${id}`);
      })
      .catch((error) => {
        console.error("Erro ao alterar a propriedade isActive da mesa:", error);
      });
  };

  const handleChanges = () => {
    handleIsActiveChange()
    handleOrderSubmit()
  }

  return (
    <div className="flex">
      <div className="flex flex-col w-full">
        <HeaderClient userName={"Usuário"} />

        <main className="h-full gap-8 flex p-8">
          <div className="w-full gap-8 grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5">
            {Object.keys(productQuantities).map((product) => (
              <button
                key={product}
                className="cursor-pointer flex flex-col justify-between border border-teal-900/30 rounded-md"
                onClick={() => handleIncrement(product)}
              >
                <img
                  src={productImages[product]}
                  alt={getProductName(product)}
                  className="w-full h-28 object-cover rounded-t-md opacity-80 shadow-custom"
                />
                <div className="p-4 h-full flex flex-col justify-between">
                  <div>
                    <p className="mb-1">{getProductName(product)}</p>
                    <p className="mb-2 text-xs text-neutral-500">
                      {getProductDescription(product)}
                    </p>
                  </div>

                  <div className="flex items-center justify-between">
                    <span>
                      R$ {getProductPrice(product).toFixed(2).replace(".", ",")}
                    </span>

                    <div className="gap-2 flex items-center">
                      <span>{productQuantities[product]}x</span>
                      <span className="text-xs text-teal-400">
                        Adicionar
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </main>
      </div>

      <div className="relative flex flex-col justify-between h-screen w-[539px] py-14 px-10 border-l border-teal-900/30">
        <div className="mb-8">
          <span className="text-teal-100/20 text-xs">Seu pedido em</span>
          <h2 className="text-lg mb-6">Ôh Grão!</h2>

          <h3 className="text-sm mb-6">Entradas</h3>

          <div className="gap-2 flex flex-col">
            {Object.keys(productQuantities).map((product) => {
              if (productQuantities[product] > 0) {
                return (
                  <div key={product}>
                    <div className="gap-2 pb-2 grid grid-cols-auto items-center">
                      <p>
                        {productQuantities[product]}x {getProductName(product)}
                      </p>
                      <p>
                        R${" "}
                        {(productQuantities[product] * getProductPrice(product))
                          .toFixed(2)
                          .replace(".", ",")}
                      </p>
                      <div className="gap-1 flex flex-col">
                        <button
                          onClick={() => handleDecrement(product)}
                          className="text-xs text-red-400"
                        >
                          Remover
                        </button>
                        <button
                          onClick={() => handleIncrement(product)}
                          className="text-xs text-teal-400"
                        >
                          Adicionar
                        </button>
                      </div>
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 flex items-center justify-between bg-brand">
          <h2>Total: R${total.toFixed(2).replace(".", ",")}</h2>
          <DialogConfirmOrder confirm={handleChanges} />
        </div>
      </div>
    </div>
  );
}
