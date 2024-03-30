import { FC, useCallback, useRef, useState } from "react";
import { css } from "@emotion/react";
import useMousePosition from "./useMousePosition";
import { motion } from "framer-motion";
import colors from "@/value/colors";
const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow-x: hidden;
  position: relative;
`;
const contentWrapper = css`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: calc(100vh - 6rem);
  gap: 2rem;
  justify-content: center;
  width: 100%;
`;

const videoBg = css`
  width: 1688px;
`;

const videoContainer = css`
  position: absolute;
  top: 0;
  width: 1688px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const contentOverlay = css`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32vh;
  gap: 2.5rem;
`;

const title = css`
  font-size: clamp(3rem, 10vw, 6rem);
  text-align: center;
  height: 218px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const infoContainer = css`
  font-size: clamp(1rem, 2vw, 1.5rem);
  font-family: "confiteria_scriptbold";
  color: #adadad;
  display: flex;
  max-width: 1200px;
  justify-content: space-between;
  width: 100%;
  padding-bottom: 3rem;

  text-align: center;
`;
const description = css`
  font-size: 1.25rem;
  max-width: 35rem;
  flex: 1;
  padding: 0 1rem;
  text-align: center;
`;

const cursor = ({ x, y }: { x: string; y: string }) => css`
  position: absolute;
  left: ${x};
  top: ${y};
  width: 100px;
  z-index: 100;
  height: 100px;
  border-radius: 50%;
  display: flex;
  background-color: black;
  color: ${colors.yellow};
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  font-weight: 700;
`;

const HomePageHero: FC = () => {
  const onClick = useCallback(() => {
    const video = videoRef.current;
    if (video) {
      video.play();
    }
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  const { x, y } = useMousePosition();

  return (
    <div
      css={container}
      onClick={onClick}
      onMouseEnter={() => {
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
      }}
    >
      {isHovered && (
        <div css={cursor({ x: `${x}px`, y: `${y}px` })}>Click to Untie</div>
      )}
      <div css={contentWrapper}>
        <div css={videoContainer}>
          <video id="myVideo" css={videoBg} ref={videoRef}>
            <source src="/images/g.mp4" type="video/mp4" />
          </video>
        </div>
        <div css={contentOverlay}>
          <h1 css={title}>
            Untie <br />
            the knot
          </h1>

          <p css={description}>
            Hi I am June! I use empathy, curiosity and design to create simple
            and effective solutions to complex problems
          </p>

          <div css={infoContainer}>
            <div>june nguyen</div>
            <div>Design is problem solving</div>
            <div>Product designer</div>
          </div>
        </div>
        d d
      </div>
    </div>
  );
};

export default HomePageHero;
