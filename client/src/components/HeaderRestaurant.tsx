import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import Logo from "/assets/logo.webp";

interface HeaderRestaurantProps {
  sector: string;
}

export function HeaderRestaurant({ sector }: HeaderRestaurantProps) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className="flex items-center justify-between mb-16 py-4">
      <div className="gap-8 flex items-center">
        <img src={Logo} alt="Logo da Cafeteria" className="h-16" />
        <h1 className="text-center">{sector}</h1>
      </div>

      <div className="gap-4 flex items-center justify-end">
        <Button color="red" text="Sair" onClick={() => navigate("/")} />

        {location.pathname === "/manager" && (
          <Button
            color="green"
            text="Área do Chef"
            onClick={() => navigate("/kitchen")}
          />
        )}
        {location.pathname === "/kitchen" && (
          <Button
            color="green"
            text="Área do Gerente"
            onClick={() => navigate("/manager")}
          />
        )}
      </div>
    </header>
  );
}
