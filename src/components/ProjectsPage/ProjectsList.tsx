import { FC } from "react";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import ProjectsListItem from "./ProjectsListItem";

import { ProjectInfo } from "@/value/projectsInfo";
const container = css`
  ${contentContainer}

  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const contentWrapper = css`
  padding: 3rem 1rem;
  max-width: 1400px;
  width: 100%;
  display: grid;
  grid-gap: 1rem;
  row-gap: 5rem;
  grid-template-columns: repeat(auto-fill, minmax(24rem, 1fr));
`;

const heading = css`
  border-top: 1px solid #adadad;
  border-bottom: 1px solid #adadad;
  padding: 1rem;
  color: #adadad;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  h3 {
    font-size: 1.5rem;
    max-width: 1400px;
    padding: 0 1rem;
    width: 100%;
  }
`;
const ProjectList: FC<{
  title: string;
  projects: ProjectInfo[];
}> = ({ title, projects }) => {
  return (
    <div css={container} data-aos="fade-up">
      <div css={heading}>
        <h3>{title}</h3>
      </div>

      <div css={contentWrapper}>
        {projects.map((project) => (
          <ProjectsListItem project={project} key={project.slug} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
