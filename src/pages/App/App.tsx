import { Outlet } from "react-router-dom";
import Navigator from "@/components/molecules/Navigator/Navigator";
import Icon from "@/components/atoms/Icon/Icon";
import { ReactComponent as BriefcaseIcon } from "@/assets/images/icons/briefcase.svg";
import { ReactComponent as Laptop } from "@/assets/images/icons/laptop.svg";
import { ReactComponent as Github } from "@/assets/images/icons/github.svg";
import { ReactComponent as Linkedin } from "@/assets/images/icons/linkedin.svg";
import List from "@/components/atoms/List/List";
import { Direction } from "@/constants/Common/Direction";
import { Size } from "@/constants/Common/Size";
import { FC } from "react";
import Header, { HeaderType } from "@/components/atoms/Header/Header";
import { Color } from "@/constants/Common/Color";
import NavLink from "@/components/atoms/NavLink/NavLink";
import Link from "@/components/atoms/Link/Link";

const App: FC = () => {
  const getListElements = () => {
    return [
      <NavLink to="/portfolio">
        <Icon size={Size.ExtraLarge}>
          <BriefcaseIcon />
        </Icon>
      </NavLink>,
      <NavLink to="projects">
        <Icon size={Size.ExtraLarge}>
          <Laptop />
        </Icon>
      </NavLink>,
      <Link url="https://github.com/SabrinaFZ" blank>
        <Icon size={Size.ExtraLarge}>
          <Github />
        </Icon>
      </Link>,
      <Link url="https://www.linkedin.com/in/sabrina-fernandez-zambrano" blank>
        <Icon size={Size.ExtraLarge}>
          <Linkedin />
        </Icon>
      </Link>,
    ];
  };
  return (
    <>
      <Navigator direction={Direction.Vertical}>
        <List direction={Direction.Vertical} elements={getListElements()} />
      </Navigator>
      <div className="container">
        <header className="container__header">
          <Header
            type={HeaderType.h1}
            text="Sabrina Fernández Zambrano"
          ></Header>
          <Header
            type={HeaderType.h2}
            color={Color.Gray}
            text="Full Stack Developer"
          ></Header>
          <Header type={HeaderType.h3} text="📍 Madrid, Spain"></Header>
        </header>
        <Outlet />
      </div>
    </>
  );
};

export default App;
