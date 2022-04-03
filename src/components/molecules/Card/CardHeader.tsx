import Header, { HeaderType } from "@/components/atoms/Header/Header";
import { FC, ReactNode } from "react";

interface CardHeaderProps {
  title: string;
  secondaryTitle: string;
  children?: ReactNode;
}

const CardHeader: FC<CardHeaderProps> = (CardHeaderProps) => {
  return (
    <div className="card-header">
      {CardHeaderProps.title ? (
        <Header type={HeaderType.h4} text={CardHeaderProps.title} />
      ) : null}
      {CardHeaderProps.secondaryTitle ? (
        <Header type={HeaderType.h5} text={CardHeaderProps.secondaryTitle} />
      ) : null}
      {CardHeaderProps.children}
    </div>
  );
};

export default CardHeader;
