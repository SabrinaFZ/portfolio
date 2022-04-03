import { FC, ReactNode } from "react";

interface CardProps {
  children?: ReactNode;
}

const Card: FC<CardProps> = (CardProps) => {
  return <div className="card">{CardProps.children}</div>;
};

export default Card;
