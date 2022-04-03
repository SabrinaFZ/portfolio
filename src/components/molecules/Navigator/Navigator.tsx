import { Direction } from "@/constants/Common/Direction";
import { FC, ReactNode } from "react";

interface NavigatorProps {
  children: ReactNode;
  direction?: Direction;
}

const Navigator: FC<NavigatorProps> = (NavigatorProps) => {
  return (
    <nav
      className={`navigator navigator--${
        NavigatorProps.direction ?? "horizontal"
      }`}
    >
      {NavigatorProps.children}
    </nav>
  );
};

export default Navigator;
