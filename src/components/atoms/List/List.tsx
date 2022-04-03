import { Direction } from "@/constants/Common/Direction";
import { FC, ReactNode } from "react";
import Text from "@/components/atoms/Text/Text";

interface ListProps {
  elements: Array<string | ReactNode>;
  direction?: Direction;
  listDecoration?: boolean;
}

const List: FC<ListProps> = (ListProps) => {
  return (
    <ul
      className={`list list--${ListProps.direction ?? "horizontal"} ${
        ListProps.listDecoration ? "list--decorated" : ""
      }`}
    >
      {ListProps.elements.map((element, index) => {
        return typeof element === "string" ? (
          <li className="list__item" key={index}>
            <Text text={element}></Text>
          </li>
        ) : (
          <li className="list__item" key={index}>
            {element}
          </li>
        );
      })}
    </ul>
  );
};

export default List;
