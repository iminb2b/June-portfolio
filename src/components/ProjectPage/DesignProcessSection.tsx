import { FC } from "react";
import { css } from "@emotion/react";

const container = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
`;

const twoImageContainer = css`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  box-sizing: border-box;
`;

const threeImageContainer = css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  width: 60%;
  box-sizing: border-box;
`;

const imageContainer = css`
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  gap: 3rem;
  max-width: 70%;

  @media screen and (max-width: 800px) {
    max-width: 100%;
  }
`;
const imageItem = css`
  max-width: 100%;
`;

const fullImageItem = css`
  width: 100%;
  object-fit: contain;
`;

const textContainer = css`
  background-color: bisque;
  padding: 1.25rem;
  border-radius: 1rem;
  text-align: left;
  width: 100%;
`;
const imgWrapper = css`
  object-fit: contain;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
`;

const videoBg = css`
  width: 100%;
`;

const DesignProcessSection: FC<{
  item: {
    text?: string;
    image?: string[];
    video?: string;
  };
}> = ({ item: { text, image, video } }) => {
  return (
    <div css={container}>
      {text && !image && <div css={textContainer}>{text}</div>}

      {image && (
        <div
          css={
            image.length > 1
              ? image.length === 2
                ? twoImageContainer
                : threeImageContainer
              : imageContainer
          }
        >
          {image.map((img, index) => (
            <div css={imgWrapper}>
              <img
                src={img}
                alt=""
                css={image.length === 3 ? fullImageItem : imageItem}
                key={index}
              />
              {text && <div css={textContainer}>{text}</div>}
            </div>
          ))}
        </div>
      )}

      {video && (
        <video id="myVideo" css={videoBg} controls>
          <source src={video} type="video/mp4" />
        </video>
      )}
    </div>
  );
};

export default DesignProcessSection;
