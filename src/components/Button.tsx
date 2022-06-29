import { ReactNode } from "react";

type ButtonProps = {
  children?: ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const Button: React.FunctionComponent<ButtonProps> = (props) => {
  const { children, ...otherProps } = props;
  return (
    <button
      type="submit"
      className="font-bold py-2 px-4 rounded bg-blue-500 hover:bg-blue-800 text-white"
      {...otherProps}
    >
      {children}
    </button>
  );
};
