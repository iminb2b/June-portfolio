import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { useRouter } from "next/router";
import ErrorPageContent from "@/components/ErrorPageContent";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import { useContext } from "react";
import { AppContext } from "@/context/AppContext";
import { projectInfos } from "@/value/projectsInfo";
import colors from "@/value/colors";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import DesignProcessSection from "@/components/ProjectPage/DesignProcessSection";

const container = css`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  min-height: calc(100vh - 5rem);
  align-items: center;
  padding: 2rem 0;
  gap: 5rem;
`;

const contentWrapper = css`
  ${contentContainer}
  max-width: 1400px;
  gap: 2rem;
  padding: 0 1rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const headingContainer = css`
  padding: 3rem 0;
  background-color: ${colors.yellow};
  width: 100%;
  text-align: center;
`;

const headingTitle = css`
  font-size: 2.5rem;
  font-weight: 500;
`;

const headingDescription = css`
  font-weight: 700;
  font-size: 1.5rem;
`;

const infoContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  max-width: 1200px;

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const info2Container = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 3rem;
  max-width: 1200px;

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const infoItemContainer = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const infoItem = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const infoTitle = css`
  font-size: 1.25rem;
`;

const infoDescription = css``;

const productsContainer = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem 0;
  align-items: center;

  h1 {
    height: 4rem;
  }
`;

const ProjectPage: NextPage = () => {
  const router = useRouter();

  console.log(router);
  const slug = router.query.slug;

  const project = projectInfos.filter((project) => project.slug === slug)[0];
  console.log(project);

  if (!project) return <ErrorPageContent />;

  return (
    <PageContainer>
      <PageMeta title={project.title} description={project.title} />
      <Header />
      <div css={container}>
        <div css={headingContainer}>
          <h1 css={headingTitle}>{project.title}</h1>
          <p css={headingDescription}>{project.description}</p>
        </div>
        <div css={contentWrapper}>
          <div css={infoContainer}>
            <div css={infoItem}>
              <h3 css={infoTitle}>Overview</h3>
              <p css={infoDescription}>{project.projectPreview}</p>
            </div>
            <div css={info2Container}>
              <div css={infoItemContainer}>
                <div css={infoItem}>
                  <h3 css={infoTitle}>Category</h3>
                  <p css={infoDescription}>{project.category}</p>
                </div>
                <div css={infoItem}>
                  <h3 css={infoTitle}>Duration</h3>
                  <p css={infoDescription}>{project.duration}</p>
                </div>
              </div>
              <div css={infoItemContainer}>
                <div css={infoItem}>
                  <h3 css={infoTitle}>Tools</h3>
                  <p css={infoDescription}>{project.tools}</p>
                </div>
                <div css={infoItem}>
                  <h3 css={infoTitle}>Deliver</h3>
                  <p css={infoDescription}>{project.deliver}</p>
                </div>
              </div>
            </div>
          </div>

          {project.designProcess && (
            <div css={productsContainer}>
              <h1>Design Process</h1>
              {project.designProcess?.map((item, index) => (
                <DesignProcessSection item={item} key={index} />
              ))}
            </div>
          )}
          {project.finalProduct && (
            <div css={productsContainer}>
              {project.finalProduct?.map((item, index) => (
                <DesignProcessSection item={item} key={index} />
              ))}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </PageContainer>
  );
};

export default ProjectPage;
