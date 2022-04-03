import { Color } from "@/constants/Common/Color";
import { Font } from "@/constants/Common/Font";
import { Size } from "@/constants/Common/Size";
import { FC } from "react";

interface TextProps {
  color?: Color;
  size?: Size;
  font?: Font;
  text: string;
}

const Text: FC<TextProps> = (TextProps) => {
  return (
    <p
      className={`text ${TextProps.size ?? Size.Normal} ${
        TextProps.color ?? Color.Black
      } ${TextProps.font ?? ""}`}
    >
      {TextProps.text}
    </p>
  );
};

export default Text;
