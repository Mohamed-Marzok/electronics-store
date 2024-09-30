import { ReactNode } from "react";
import clsx from "clsx";

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export default function Button({ children, className, ...rest }: IProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-200",
        className
      )}
    >
      {children}
    </button>
  );
}
