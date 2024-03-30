import { FC, useContext } from "react";
import { css } from "@emotion/react";
import Link from "next/link";
import behance from "@/assets/img/145799.png";
import insta from "@/assets/img/87390.png";
import linkedIn from "@/assets/img/icon-linkedin-1.png";
import colors from "@/value/colors";
const container = ({ dark }: { dark: boolean }) =>
  css`
    padding: 3rem 1rem;
    max-width: 1400px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: ${dark ? "#000" : "#fff"};
    color: ${!dark ? "#000" : "#fff"};

    @media screen and (max-width: 800px) {
      grid-template-columns: 1fr;
      gap: 3rem;
    }
  `;
const contentContainer = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const title = css`
  color: #adadad;
  text-transform: uppercase;
`;
const flexContainer = css`
  display: flex;
  gap: 1rem;
`;
const gridContainer = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
`;
const email = css`
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.yellow};
`;
const image = css`
  height: 40px;
`;

const Footer: FC<{ dark?: boolean }> = ({ dark = false }) => {
  return (
    <div css={container({ dark })}>
      <div css={contentContainer}>
        <h4 css={title}>Follow Me</h4>
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
        <h4 css={title}>Information</h4>

        <ul css={gridContainer}>
          <Link href="">About me</Link>
          <Link href="">Resume</Link>
          <Link href="">Get in touch</Link>
          <Link href="">Work</Link>
        </ul>
      </div>

      <div css={contentContainer}>
        <h4 css={title}>Contact Me</h4>
        <Link css={email} href="mailto:tmnd5603@gmail.com">
          tmnd5603@gmail.com
        </Link>

        <p>Copyright © 2024 • June Nguyen</p>
        <p>All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
