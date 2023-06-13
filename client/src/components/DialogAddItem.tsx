import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "./Button";
import { X } from "@phosphor-icons/react";
import { useRef } from "react";

interface DialogAddItemProps {
  add: () => Promise<void>;
}

export function DialogAddItem(props: DialogAddItemProps) {
  const tableNumberRef = useRef<HTMLInputElement>(null);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <Button color="green" text="Adicionar mesa" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="bg-brand/75 fixed inset-0" />

        <Dialog.Content className="bg-brand fixed top-[50%] left-[50%] max-w-sm p-8 pt-16 translate-x-[-50%] translate-y-[-50%] rounded-lg border border-teal-900 focus:outline-none">
          <Dialog.Title className="text-2xl text-center">
            Adicionar mesa
          </Dialog.Title>

          <div className="mt-4">
            <label className="block mb-2 text-sm font-medium">
              Número da mesa
            </label>
            <input
              type="number"
              className="w-full py-2 px-4 bg-brand border border-teal-900 rounded"
              placeholder="Insira o número da mesa"
              ref={tableNumberRef}
              id="table-number"
            />
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <Button color="green" text="Adicionar" onClick={props.add} />
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 p-2 rounded-full"
              aria-label="Close"
            >
              <X />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
