import { useNavigate } from "react-router-dom";
import { Button } from "./Button";
import Logo from "/assets/logo.webp";

interface HeaderClient {
  userName: string;
}

export function HeaderClient({ userName }: HeaderClient) {
  const navigate = useNavigate();

  return (
    <header className="flex px-8 border-b border-teal-900/30">
      <div className="flex w-full items-center justify-between py-4">
        <div className="gap-8 flex items-center">
          <img src={Logo} alt="Logo da Cafeteria" className="h-16" />
        </div>

        <div className="gap-4 flex items-center justify-end">
          <span>Olá, {userName}!</span>
          <Button color="red" text="Sair" onClick={() => navigate("/")} />
        </div>
      </div>
    </header>
  );
}
