import PageContainer from "@/components/PageContent";
import { NextPage } from "next";
import PageMeta from "@/components/PageMeta";
import { css } from "@emotion/react";
import colors from "@/value/colors";
import Link from "next/link";
import behance from "@/assets/img/145799.png";
import insta from "@/assets/img/87390.png";
import linkedIn from "@/assets/img/icon-linkedin-1.png";
import Header from "@/components/Header";
const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const contentWrapper = css`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5rem 1rem;
  margin: auto;

  width: 100%;
  gap: 3rem;
  max-width: 1400px;
`;

const video = css`
  width: 100%;
`;
const title = css`
  font-size: 2.5rem;
  font-weight: 500;
`;
const sectionTitle = css`
  color: #adadad;
  text-transform: uppercase;
`;
const description = css`
  font-size: 1.375rem;
  line-height: 1.4;
`;

const email = css`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.yellow};
`;
const image = css`
  height: 40px;
`;

const flexContainer = css`
  display: flex;
  gap: 1rem;
`;

const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const ContactPage: NextPage = () => {
  return (
    <PageContainer>
      <PageMeta title="June - Contact Me" description={"Duyen Nguyen"} />
      <Header />
      <div css={container}>
        <div css={contentWrapper}>
          <div css={contentContainer}>
            <h1 css={title}>Let's untie the knot together! </h1>
            <p css={description}>
              Feel free to contact me. I'm always eager to connect with fellow
              designers and potential clients
            </p>
          </div>
          <div css={contentContainer}>
            <h4 css={sectionTitle}>Follow Me</h4>
            <ul css={flexContainer}>
              <Link target="__blank" href="https://www.linkedin.com/in/jdng/">
                <img css={image} src={insta.src} />
              </Link>
              <Link target="__blank" href="https://www.linkedin.com/in/jdng/">
                <img css={image} src={linkedIn.src} />
              </Link>
              <Link target="__blank" href="https://www.behance.net/duynmai6">
                <img css={image} src={behance.src} />
              </Link>
            </ul>
          </div>
          <div css={contentContainer}>
            <h4 css={sectionTitle}>Contact Me</h4>
            <Link css={email} href="mailto:tmnd5603@gmail.com">
              tmnd5603@gmail.com
            </Link>
          </div>
        </div>
      </div>

      <video loop autoPlay muted className="skillVideo" css={video}>
        <source src="/images/skill2.mp4" type="video/mp4" />
      </video>
    </PageContainer>
  );
};

export default ContactPage;
