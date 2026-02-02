import { getAllProjects } from "@/graphql/components/getAllProjects";
import OurWorkSectionClient from "./OurWorkSectionClient";

export default async function OurWorkSection() {
  const projects = await getAllProjects();

  if (!projects || projects.length === 0) return null;

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <OurWorkSectionClient projects={projects} />
      </div>
    </section>
  );
}
