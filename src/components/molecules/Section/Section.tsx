import { Color } from "@/constants/Common/Color";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import SectionHeader from "./SectionHeader";

interface SectionProps {
  title: string;
  headerColor?: Color;
  children?: ReactNode;
  className?: string;
}

const Section: FC<SectionProps> = (SectionProps) => {
  const [isOpen, setOpen] = useState(false);
  const sectionRef = useRef(null as unknown as HTMLElement);

  useEffect(() => {
    if (sectionRef.current) {
      window.scrollTo({
        behavior: "smooth",
        top: sectionRef.current.offsetTop,
      });
    }
  }, [isOpen]);

  const toggleSection = () => {
    setOpen(!isOpen);
  };

  return (
    <section ref={sectionRef} className={`section ${SectionProps.className}`}>
      <SectionHeader
        title={SectionProps.title}
        headerColor={SectionProps.headerColor ?? Color.Black}
        callbackFn={() => toggleSection()}
        isOpen={isOpen}
      />
      <div className="section-content">
        {isOpen ? SectionProps.children : null}
      </div>
    </section>
  );
};

export default Section;
