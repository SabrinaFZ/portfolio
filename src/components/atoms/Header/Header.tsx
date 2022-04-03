import { FC } from "react";
import { Color } from "@/constants/Common/Color";

export enum HeaderType {
  h1 = "h1",
  h2 = "h2",
  h3 = "h3",
  h4 = "h4",
  h5 = "h5",
  h6 = "h6",
}

interface HeaderProps {
  type: HeaderType;
  text: string;
  color?: Color;
}

const Header: FC<HeaderProps> = (HeaderProps) => {
  const getHeader = () => {
    return {
      [HeaderType.h1]: () => (
        <h1 className={`header h1 ${HeaderProps.color ?? ""}`}>
          {HeaderProps.text}
        </h1>
      ),
      [HeaderType.h2]: () => (
        <h2 className={`header h2 ${HeaderProps.color ?? ""}`}>
          {HeaderProps.text}
        </h2>
      ),
      [HeaderType.h3]: () => (
        <h3 className={`header h3 ${HeaderProps.color ?? ""}`}>
          {HeaderProps.text}
        </h3>
      ),
      [HeaderType.h4]: () => (
        <h4 className={`header h4 ${HeaderProps.color ?? ""}`}>
          {HeaderProps.text}
        </h4>
      ),
      [HeaderType.h5]: () => (
        <h5 className={`header h5 ${HeaderProps.color ?? ""}`}>
          {HeaderProps.text}
        </h5>
      ),
      [HeaderType.h6]: () => (
        <h6 className={`header h6 ${HeaderProps.color ?? ""}`}>
          {HeaderProps.text}
        </h6>
      ),
    };
  };

  return <>{getHeader()[HeaderProps.type]()}</>;
};

export default Header;
