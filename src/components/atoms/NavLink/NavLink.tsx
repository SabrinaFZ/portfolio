import { FC, ReactNode } from "react";
import {
  NavLink as NavLinkRoute,
  useMatch,
  useResolvedPath,
} from "react-router-dom";

interface NavLinkProps {
  children?: ReactNode;
  text?: string;
  to: any;
}

const NavLink: FC<NavLinkProps> = (NavLinkProps) => {
  const resolved = useResolvedPath(NavLinkProps.to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <NavLinkRoute
      className={`nav-link ${match ? "nav-link--active" : ""}`}
      to={NavLinkProps.to}
    >
      {NavLinkProps.children ?? <span>{NavLinkProps.text}</span>}
    </NavLinkRoute>
  );
};

export default NavLink;
