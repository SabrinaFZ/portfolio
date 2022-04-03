import { Size } from "@/constants/Common/Size";
import { FC, ReactNode } from "react";

export interface IconProps {
  size?: Size;
  children: ReactNode;
}

const Icon: FC<IconProps> = (IconProps) => {
  return (
    <div className={`icon icon--${IconProps.size ?? Size.Normal}`}>
      {IconProps.children}
    </div>
  );
};

export default Icon;
