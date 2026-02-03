import { Button } from "@/components/globals/buttons/Button";
import { getUriByDbId } from "@/graphql/components/getUriByDbId";
import { getProjectById } from "@/graphql/components/getProjectById";
import ProjectsSliderContainer from "./ProjectsSliderContainer";

export default async function ProjectsSection({ data }) {
  const content = data?.data || {};
  const { button_text, button_page, open_in_new_tab, projects } = content;

  let buttonHref = "/";
  if (Array.isArray(button_page) && button_page.length > 0) {
    const pageId = button_page[0]?.id;
    if (pageId) {
      buttonHref = await getUriByDbId(pageId);
    }
  }

  const projectIds = projects || [];
  const fetchedProjects = await Promise.all(
    projectIds.map(async (p) => {
      const id = p.id || p;
      return await getProjectById(id);
    }),
  );

  const cleanProjects = fetchedProjects.filter(Boolean);

  return (
    <section className="bg-black">
      <div className="container-fractal">
        <div className="flex w-full flex-col items-center justify-center gap-7.5 py-15 lg:items-start lg:gap-12.5 lg:py-30">
          {cleanProjects.length > 0 && (
            <ProjectsSliderContainer projects={cleanProjects} />
          )}

          {button_text && button_page && (
            <Button
              href={buttonHref}
              target={open_in_new_tab ? "_blank" : "_self"}
              variant="icon"
            >
              {button_text}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
