import { FC } from "react";
import { css } from "@emotion/react";
import { contentContainer } from "@/styles/generalStyles";
import thumbUpIcon from "@/assets/img/icon-thumbs-up.png";
import zapOff from "@/assets/img/icon-zap-off.png";
import briefCase from "@/assets/img/icon-briefcase.png";
import linkedIn from "@/assets/img/icon-linkedin.png";
import colors from "@/value/colors";

const container = css`
  border-top: 50px solid ${colors.yellow};
  display: flex;
  justify-content: center;
  margin-top: 5rem;
  padding: 10rem 0;
  width: 100%;
  text-align: center;
  flex-direction: column;
  align-items: center;
`;
const contentWrapper = css`
  ${contentContainer}
  max-width: 1400px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  padding: 5rem 1rem;
  grid-gap: 1rem;

  @media screen and (max-width: 920px) {
    grid-template-columns: 1fr 1fr;
    padding: 1rem 0;
  }

  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr;
    padding: 1rem 0;
  }
`;

const service = css`
  border-radius: 2rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  text-align: left;
`;

const img = css`
  width: 43px;
  height: 43px;
  background-color: ${colors.yellow};
  border-radius: 8px;
`;

const sectionDescription = css`
  font-size: 1.25rem;
  max-width: 45rem;
  line-height: 1.7;
`;
const title = css`
  font-size: 1.5rem;
`;
const description = css`
  font-size: 1.125rem;
`;

const sectionTitle = css`
  font-size: 2rem;
`;
const sectionTitle2 = css`
  font-size: 2rem;
  color: #51cbff;
`;

const textContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0 1rem;
`;

const HomePageMyServices: FC = () => {
  return (
    <div css={container}>
      <div css={textContainer}>
        <h1 css={sectionTitle}>Delivering good designs</h1>
        <h1 css={sectionTitle2}>Combining various disciplines</h1>
        <p css={sectionDescription}>
          I provide a diverse skill set across various disciplines that enables
          me to elevate UI/UX design to new heights.
        </p>
      </div>
      <div css={contentWrapper} data-aos="fade-up">
        <div css={service}>
          <img src={thumbUpIcon.src} css={img} alt="Ui/UX" />
          <h3 css={title}>UI/UX</h3>
          <p css={description}>
            Crafting intuitive interfaces backed by thorough research to
            understand their need and boost user engagement.
          </p>
        </div>
        <div css={service}>
          <img src={zapOff.src} css={img} alt="Graphic Design" />
          <h3 css={title}>Graphic Design</h3>
          <p css={description}>
            Transform ideas into visually stunning designs for effective
            communication.
          </p>
        </div>
        <div css={service}>
          <img src={briefCase.src} css={img} alt="Branding And Strategy" />
          <h3 css={title}>Branding & Strategy</h3>
          <p css={description}>
            Define brand identity, values, and visuals for impactful campaigns.
          </p>
        </div>
        <div css={service}>
          <img src={linkedIn.src} css={img} alt="3D" />
          <h3 css={title}>3D & Motion Graphic</h3>
          <p css={description}>
            Create immersive experiences with captivating 3D visuals and dynamic
            motion graphics.
          </p>
        </div>
      </div>

      <video loop autoPlay muted className="skillVideo">
        <source src="/images/skill2.mp4" type="video/mp4" />
      </video>
    </div>
  );
};

export default HomePageMyServices;
