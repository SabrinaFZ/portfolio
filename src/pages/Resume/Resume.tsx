import { FC } from "react";
import Section from "@/components/molecules/Section/Section";
import Card from "@/components/molecules/Card/Card";
import CardHeader from "@/components/molecules/Card/CardHeader";
import Header, { HeaderType } from "@/components/atoms/Header/Header";
import List from "@/components/atoms/List/List";
import { Direction } from "@/constants/Common/Direction";
import WorkExperience from "./WorkExperience";
import Text from "@/components/atoms/Text/Text";
import Education from "./Education";
import Skills, { Technology } from "./Skills";
import Icon from "@/components/atoms/Icon/Icon";
import Languages from "./Languages";
import { Font } from "@/constants/Common/Font";
import { Size } from "@/constants/Common/Size";
import withSeo from "@/components/hoc/Seo/Seo";

const Resume: FC = () => {
  const transformToComponent = (technologies: Array<Technology>) => {
    return technologies.map((technology) => (
      <>
        <Icon size={Size.Medium}>{technology.icon}</Icon>
        <Text text={technology.name} size={Size.ExtraSmall} />
      </>
    ));
  };
  return (
    <div className="resume">
      <div className="resume__sections">
        <Section title="💼 Work Experience" className="resume__work-experience">
          {WorkExperience.map((experience) => (
            <div key={Math.random()}>
              <Text font={Font.Bold} text={experience.date} />
              <Card>
                <CardHeader
                  title={experience.company}
                  secondaryTitle={experience.role}
                >
                  <Header
                    type={HeaderType.h6}
                    text={`📍 ${experience.location}`}
                  />
                </CardHeader>
                <List
                  elements={experience.responsibilities}
                  direction={Direction.Vertical}
                />
              </Card>
            </div>
          ))}
        </Section>
        <Section title="🎓 Education" className="resume__education">
          {Education.map((education) => (
            <div key={Math.random()}>
              <Text font={Font.Bold} text={education.date} />
              <Card>
                <CardHeader
                  title={education.institution}
                  secondaryTitle={education.degree}
                >
                  <Header
                    type={HeaderType.h6}
                    text={`📍 ${education.location}`}
                  />
                </CardHeader>
              </Card>
            </div>
          ))}
        </Section>
        <Section title="💻 Skills" className="resume__skills">
          {Skills.map((skill) => (
            <div key={Math.random()}>
              <Text font={Font.Bold} text={skill.field} />
              <Card>
                <List elements={transformToComponent(skill.technologies)} />
              </Card>
            </div>
          ))}
        </Section>
        <Section title="🌍 Languages" className="resume__languages">
          {Languages.map((language) => (
            <Card key={Math.random()}>
              <CardHeader
                title={language.language}
                secondaryTitle={language.level}
              >
                {language.certificates ? (
                  <Header type={HeaderType.h6} text={language.certificates} />
                ) : null}
              </CardHeader>
            </Card>
          ))}
        </Section>
      </div>
    </div>
  );
};

export default withSeo(Resume);
