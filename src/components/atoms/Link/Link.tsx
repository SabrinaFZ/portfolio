import { FC, ReactNode } from "react";

interface LinkProps {
  children?: ReactNode;
  text?: string;
  blank?: boolean;
  url: string;
}

const Link: FC<LinkProps> = (LinkProps) => {
  const redirectTo = () => {
    window.open(LinkProps.url, `${LinkProps.blank ? "_blank" : undefined}`);
  };
  return (
    // eslint-disable-next-line jsx-a11y/anchor-is-valid
    <a className="link" href="#" onClick={() => redirectTo()}>
      {LinkProps.children ?? LinkProps.text}
    </a>
  );
};

export default Link;
