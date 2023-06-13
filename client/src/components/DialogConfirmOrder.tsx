import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "./Button";
import { X } from "@phosphor-icons/react";

interface DialogConfirmOrderProps {
  confirm: () => void;
}

export function DialogConfirmOrder({ confirm }: DialogConfirmOrderProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
      <Button color="green" text="Fazer pedido" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-brand/75 fixed inset-0" />

        <Dialog.Content className="bg-brand fixed top-[50%] left-[50%] max-w-sm p-8 pt-16 translate-x-[-50%] translate-y-[-50%] rounded-lg border border-teal-900 focus:outline-none">
          <Dialog.Title className="text-2xl text-center">Confirmar Pedido</Dialog.Title>

          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Deseja confirmar o pedido?
          </Dialog.Description>

          <div className="mt-[25px] flex justify-center">
            <Dialog.Close asChild>
              <Button color="green" text="Confirmar" onClick={confirm} />
            </Dialog.Close>
          </div>

          <Dialog.Close asChild>
            <button className="absolute top-4 right-4 p-2 rounded-full" aria-label="Close">
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
