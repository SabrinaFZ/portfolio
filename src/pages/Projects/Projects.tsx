import Link from "@/components/atoms/Link/Link";
import withSeo from "@/components/hoc/Seo/Seo";
import Card from "@/components/molecules/Card/Card";
import CardHeader from "@/components/molecules/Card/CardHeader";
import Section from "@/components/molecules/Section/Section";
import PersonalProjects from "./PersonalProjects";

const Projects = () => {
  return (
    <Section title="📁 Personal Projects" className="projects">
      {PersonalProjects.map((project) => (
        <Link key={Math.random()} url={project.url} blank>
          <Card>
            <CardHeader
              title={project.title}
              secondaryTitle={project.description}
            ></CardHeader>
          </Card>
        </Link>
      ))}
    </Section>
  );
};

export default withSeo(Projects);
