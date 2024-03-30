import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { projectInfos } from "@/value/projectsInfo";
import ProjectList from "@/components/ProjectsPage/ProjectsList";
import { css } from "@emotion/react";
import colors from "@/value/colors";

const projectContainer = css`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  padding: 10rem 0;
  width: 100%;
`;
const title = css`
  text-align: center;
  font-size: clamp(1.5rem, 3vw, 3rem);
  color: ${colors.yellow};
`;

const ProjectsPage: NextPage = () => {
  const uiuxProjects = projectInfos.filter(
    (project) => project.type === "UIUX",
  );

  const brandingProjects = projectInfos.filter(
    (project) => project.type === "Branding",
  );

  const motionProjects = projectInfos.filter(
    (project) => project.type === "Motion",
  );

  return (
    <PageContainer dark={true}>
      <PageMeta title="June - Projects Page" description={" Duyen Nguyen"} />
      <Header dark />
      <div css={projectContainer}>
        <h1 css={title}>Work</h1>
        <ProjectList title="UI/UX" projects={uiuxProjects} />
        <ProjectList
          title="Branding & Graphic Design"
          projects={brandingProjects}
        />
        <ProjectList title="Motion & 3D" projects={motionProjects} />
      </div>
      <Footer dark />
    </PageContainer>
  );
};

export default ProjectsPage;
