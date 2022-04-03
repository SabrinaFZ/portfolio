import { FC } from "react";
import Header, { HeaderType } from "@/components/atoms/Header/Header";
import Icon from "@/components/atoms/Icon/Icon";
import { Color } from "@/constants/Common/Color";
import { ReactComponent as ChevronDown } from "@/assets/images/icons/chevron-down.svg";
import { ReactComponent as ChevronUp } from "@/assets/images/icons/chevron-up.svg";

interface SectionHeaderProps {
  title: string;
  headerColor: Color;
  callbackFn: Function;
  isOpen: boolean;
}

const SectionHeader: FC<SectionHeaderProps> = (SectionHeaderProps) => {
  return (
    <div
      className="section-header"
      onClick={() => SectionHeaderProps.callbackFn()}
    >
      <Header
        type={HeaderType.h3}
        text={SectionHeaderProps.title}
        color={SectionHeaderProps.headerColor}
      />
      <Icon>{SectionHeaderProps.isOpen ? <ChevronUp /> : <ChevronDown />}</Icon>
    </div>
  );
};

export default SectionHeader;
