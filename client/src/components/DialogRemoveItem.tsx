import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "./Button";
import { X } from "@phosphor-icons/react";

interface DialogRemoveItemProps {
  command: number;
  remove: () => void;
}

export function DialogRemoveItem({ command, remove }: DialogRemoveItemProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color="red" text="Remover" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-brand/75 fixed inset-0" />

        <Dialog.Content className="bg-brand fixed top-[50%] left-[50%] max-w-sm p-8 pt-16 translate-x-[-50%] translate-y-[-50%] rounded-lg border border-red-800 focus:outline-none">
          <Dialog.Title className="text-2xl text-center">Confirmar Remoção</Dialog.Title>

          <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
            Tem certeza que deseja remover a mesa {command}?
          </Dialog.Description>

          <div className="mt-[25px] flex justify-center">
            <Dialog.Close asChild>
              <Button color="red" text="Remover" onClick={remove} />
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
