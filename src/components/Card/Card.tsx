import { FC, ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

export const Card: FC<CardProps> = ({ children }) => {
  return (
    <div className="flex w-xs flex-col gap-y-6 rounded-lg bg-white p-6 shadow-lg">
      {children}
    </div>
  );
};
