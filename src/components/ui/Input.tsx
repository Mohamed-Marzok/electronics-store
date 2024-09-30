import { forwardRef } from "react";

interface IProps {
  type: string;
  label: string;
  placeholder?: string;
  errorMsg?: string;
  id: string;
}

const Input = forwardRef<HTMLInputElement, IProps>(
  ({ type, label, placeholder, id, errorMsg, ...rest }, ref) => {
    return (
      <div className="mb-6">
        <label htmlFor={id} className="block   text-sm font-medium mb-1">
          {label}
        </label>
        <input
          ref={ref}
          type={type}
          id={id}
          placeholder={placeholder}
          className={`block w-full p-3 border rounded-md transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
            errorMsg
              ? "border-red-500 dark:border-red-400"
              : "border-gray-300 dark:border-gray-600"
          } bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200`}
          {...rest} // Spread the rest of the props to capture form events
        />
        {errorMsg && (
          <p className="mt-1 text-sm text-red-500 dark:text-red-400">
            {errorMsg}
          </p>
        )}
      </div>
    );
  }
);

export default Input;
