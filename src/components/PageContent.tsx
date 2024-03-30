import { css } from "@emotion/react";
import { FC, memo, ReactNode } from "react";

const pageWrapper = ({ dark }: { dark: boolean }) => css`
  display: flex;
  flex: 1 0 auto;
  flex-flow: column wrap;
  padding: 0;
  width: 100%;
  align-items: center;
  min-height: calc(100vh);
  background-color: ${dark ? "#000" : "#fff"};
`;

const PageContainer: FC<{ children: ReactNode; dark?: boolean }> = memo(
  ({ children, dark = false, ...remainingProps }) => (
    <div css={pageWrapper({ dark })} {...remainingProps}>
      {children}
    </div>
  ),
);

PageContainer.displayName = "PageContainer";

export default PageContainer;
