import { ButtonHTMLAttributes, forwardRef } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: "green" | "red" | "yellow";
  text?: string;
  children?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ color = "green", text, children, ...props}, ref) => {
    return (
      <button
        ref={ref}
        className={`gap-1 flex items-center justify-center cursor-pointer py-2 px-4 rounded text-teal-50 ${
          color === "green" && "bg-teal-600 hover:bg-teal-700"
        } ${color === "red" && "bg-red-700 hover:bg-red-800"} ${
          color === "yellow" && "bg-yellow-600 hover:bg-yellow-700"
        } transition-all`}
        {...props}
      >
        {text !== "" && <span>{text}</span>}
        {children}
      </button>
    );
  }
);
