import { FC } from "react";
import { css } from "@emotion/react";
import { ProjectInfo } from "@/value/projectsInfo";
import Link from "next/link";
import routeLinks from "@/routeLinks";
import Image from "next/image";

const projectContainer = css`
  border-radius: 0.5rem;
  padding: 0;
  width: 100%;
  flex-direction: column;
  display: flex;
  transition: all 0.3s ease-in-out;
  color: #fff;
`;

const image = css`
  border-radius: 0.5rem;
  width: 100%;
  object-fit: cover;
  aspect-ratio: 4 / 3;
`;

const video = css`
  border-radius: 0.5rem;
  width: 100%;
  object-fit: contain;
  aspect-ratio: 4 / 3;
`;
const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const title = css`
  font-size: 1.5rem;
`;
const intro = css`
  font-size: 1rem;
`;

const imgContainer = css`
  width: 100%;
  aspect-ratio: 4 / 3 !important;
`;

const ProjectsListItem: FC<{ project: ProjectInfo }> = ({ project }) => {
  return (
    <Link
      href={routeLinks.project({ slug: project.slug })}
      css={projectContainer}
    >
      {project.img && (
        <div css={imgContainer}>
          <Image
            src={project.img}
            height={291}
            width={389}
            alt=""
            css={image}
          />
        </div>
      )}

      {project.video && (
        <div css={imgContainer}>
          <video id="myVideo" css={video} autoPlay loop muted>
            <source src={project.video} type="video/mp4" />
          </video>
        </div>
      )}

      <div css={infoContainer}>
        <h3 css={title}>{project.title}</h3>
        <p css={intro}>{project.intro}</p>
      </div>
    </Link>
  );
};

export default ProjectsListItem;
