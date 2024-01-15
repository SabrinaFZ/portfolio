import { Badge } from "./ui/badge";
import { Header } from "./ui/header";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="px-4 md:px-12">
        <section>
          <h2 className="font-bold border-b-2 border-slate-600 leading-8">
            About me
          </h2>
          <p className="mt-4">
            Hello! 👋🏻 I am a Computer Engineer with experience as a Web
            Developer, specializing in both frontend and backend technologies.
            In addition, I am a strong advocate for{" "}
            <b>mental health awareness</b>.
          </p>
        </section>
        <section className="mt-12">
          <h2 className="font-bold border-b-2 border-slate-600 leading-8">
            Experience
          </h2>
          <section className="mt-4">
            <h3 className="font-semibold">Busuu · Full Stack Developer </h3>
            <h4>09/2020 - At present</h4>
          </section>
          <section className="mt-4">
            <h3 className="font-semibold">Con&Sel15 · Frontend Developer </h3>
            <h4>04/2020 - 09/2020</h4>
          </section>
          <section className="mt-4">
            <h3 className="font-semibold">Amaris · Frontend Developer </h3>
            <h4>01/2018 - 04/2020</h4>
          </section>
          <section className="mt-4">
            <h3 className="font-semibold">
              Bridge For Billions · Frontend Developer Intern{" "}
            </h3>
            <h4>01/2017 – 11/2017</h4>
          </section>
        </section>
        <section className="mt-12">
          <h2 className="font-bold border-b-2 border-slate-600 leading-8">
            Education
          </h2>
          <section className="mt-4">
            <h3 className="font-semibold">
              KeepCoding · Full Stack Web Developer Bootcamp
            </h3>
            <h4 className="mb-2">11/2018 – 10/2019</h4>
          </section>
          <section className="mt-4">
            <h3 className="font-semibold">
              Technical University of Madrid · Bachelor’s Degree of Computer
              Engineering
            </h3>
            <h4 className="mb-2">9/2011 – 01/20189</h4>
          </section>
        </section>
        <section className="mt-12">
          <h2 className="font-bold border-b-2 border-slate-600 leading-8">
            Skills
          </h2>
          <section className="mt-4">
            <h3 className="font-semibold mb-2">Front-end</h3>
            <div className="flex flex-wrap gap-1">
              <Badge content="HTML" />
              <Badge content="CSS" />
              <Badge content="Javascript" />
              <Badge content="Typescript" />
              <Badge content="React" />
              <Badge content="Vue" />
              <Badge content="Sass" />
              <Badge content="Styled Components" />
              <Badge content="TailwindCSS" />
              <Badge content="Next.js" />
            </div>
          </section>
          <section className="mt-2">
            <h3 className="font-semibold mb-2">Back-end</h3>
            <div className="flex flex-wrap gap-1">
              <Badge content="Node" />
              <Badge content="API Rest" />
              <Badge content="Nest.js" />
              <Badge content="Java" />
            </div>
          </section>
          <section className="mt-2">
            <h3 className="font-semibold mb-2">Testing</h3>
            <div className="flex flex-wrap gap-1">
              <Badge content="Jest" />
              <Badge content="React Testing Library" />
            </div>
          </section>
          <section className="mt-2">
            <h3 className="font-semibold mb-2">Databases</h3>
            <div className="flex flex-wrap gap-1">
              <Badge content="SQL" />
            </div>
          </section>
          <section className="mt-2">
            <h3 className="font-semibold mb-2">DevOps</h3>
            <div className="flex flex-wrap gap-1">
              <Badge content="Jenkins" />
              <Badge content="Docker" />
              <Badge content="Github Actions" />
            </div>
          </section>
        </section>
        <section className="mt-12">
          <h2 className="font-bold border-b-2 border-slate-600 leading-8">
            Languages
          </h2>
          <div className="flex flex-wrap gap-1 mt-4">
            <Badge
              content={
                <>
                  <Image
                    className="mr-1"
                    src="/spain.svg"
                    width={25}
                    height={25}
                    alt="Spain flag"
                  />
                  <span>Spanish (Native)</span>
                </>
              }
            />
            <Badge
              content={
                <>
                  <Image
                    className=" mr-1"
                    src="/uk.svg"
                    width={25}
                    height={25}
                    alt="Uk flag"
                  />
                  <span>English (C1)</span>
                </>
              }
            />
            <Badge
              content={
                <>
                  <Image
                    className="mr-1"
                    src="/germany.svg"
                    width={25}
                    height={25}
                    alt="Germany flag"
                  />
                  <span>German (A2)</span>
                </>
              }
            />
          </div>
        </section>
      </div>
    </main>
  );
}
