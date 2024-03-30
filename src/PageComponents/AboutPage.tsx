import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import Image from "next/image";
import aboutMe from "@/assets/img/aboutme.jpg";
import { css } from "@mui/material";
import colors from "@/value/colors";
import Header from "@/components/Header";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const container = css`
  margin-top: 10rem;

  max-width: 1200px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  color: white;
`;
const infoContainer = css`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
`;
const image = css`
  width: 100%;
  aspect-ratio: 1 / 1;
  border-radius: 2rem;
  object-fit: contain;
`;
const heading = css`
  font-size: 2.5rem;
`;
const description = css`
  line-height: 1.4;
`;
const icon = css`
  font-size: 1.5rem;
`;
const resumeButton = css`
  height: 3.75rem;
  display: flex;
  line-height: 2.75rem;
  align-items: center;
  padding: 1rem 2rem;
  border-radius: 2rem;
  background-color: ${colors.yellow};
  font-weight: bold;
  justify-content: space-between;
  color: #000;
`;

const AboutPage: NextPage = () => {
  return (
    <PageContainer dark>
      <PageMeta
        title="June - About Me"
        description={"About June - Duyen Nguyen - Product Designer"}
      />
      <Header dark />
      <div css={container}>
        <Image
          src={aboutMe.src}
          height={600}
          width={600}
          priority
          alt="June"
          css={image}
        />

        <div css={infoContainer}>
          <h1 css={heading}>Hi! My name is June Nguyen</h1>
          <p css={description}>
            I thoroughly enjoy engaging in the process of design thinking and
            problem-solving, which organically drove me to pursue this field.
          </p>
          <p css={description}>
            When embarking on a project, I embrace a holistic approach that
            encompasses understanding customer needs, crafting user-centered
            design, and aligning solutions with business strategy. This also
            involves navigating technical complexities in project management and
            coding.
          </p>
          <p css={description}>
            Furthermore, I like to integrate insights and storytelling into my
            products. I tend to lean towards a minimalistic UI style, ensuring
            effectiveness in user interaction and experience.
          </p>

          <Link
            href="/pdf/Resume - June Nguyen.pdf"
            css={resumeButton}
            target="__blank"
          >
            View my resume
            <ArrowForwardIcon css={icon} />
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default AboutPage;
