import { css, Global } from "@emotion/react";
import { FC, memo, ReactNode } from "react";
import Header from "./Header";
import globalStyles from "@/styles/globalStyles";
import colors from "@/value/colors";
import Footer from "./Footer";

const pageContent = css`
  flex: 1 0 auto;
  width: 100%;
  height: 100%;
`;

const pageContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: calc(100vh);
  background-color: ${colors.white};
  color: ${colors.textPrimary};
  background-repeat: repeat-y;
  background-size: cover;
  position: relative;
`;

const Layout: FC<{
  children: ReactNode;
  darkBackground: boolean;
}> = memo(({ children }) => {
  return (
    <div css={pageContainer}>
      <Global styles={globalStyles} />

      <div css={pageContent}>{children}</div>
    </div>
  );
});

Layout.displayName = "Layout";

export default Layout;
