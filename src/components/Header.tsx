import { FC } from "react";
import { css } from "@emotion/react";
import Logo from "./Logo";
import { contentContainer } from "@/styles/generalStyles";
import NavList from "./Nav/NavList";
import { useDialogStore } from "@ariakit/react";
import NavMenuMobileButton from "./Nav/NavMenuMobileButton";
import NavListMobile from "./Nav/NavListMobile";
import colors from "@/value/colors";
import Link from "next/link";
const container = ({ dark }: { dark: boolean }) => css`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 10;
  justify-content: center;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  height: 6rem;
  width: 100%;
  background-color: ${dark ? "#000" : "#fff"};
  color: ${!dark ? "#000" : "#fff"};
  padding: 0 1rem;
`;

const contentWrapper = css`
  ${contentContainer}

  max-width:1400px;
  width: 100%;
  transition: all 0.3s ease;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  position: relative;
`;
const resumeButton = css`
  height: 2.75rem;
  display: block;
  line-height: 2.75rem;
  padding: 0 1rem;
  border-radius: 2rem;
  background-color: ${colors.yellow};
  font-weight: bold;
  color: #000;
`;

const Header: FC<{ dark?: boolean }> = ({ dark = false }) => {
  const mobileHeaderNavDialogStore = useDialogStore();
  const mobileHeaderNavDialogIsMounted =
    mobileHeaderNavDialogStore.useState("mounted");

  return (
    <div css={container({ dark })}>
      <div css={contentWrapper}>
        <Logo />
        <NavList dark={dark} />
        <Link
          href="/pdf/June Duyen Nguyen - Resume.pdf"
          css={resumeButton}
          target="__blank"
        >
          Resume
        </Link>
        <NavMenuMobileButton
          dialogStore={mobileHeaderNavDialogStore}
          dark={dark}
        />

        {mobileHeaderNavDialogIsMounted && (
          <NavListMobile dialogStore={mobileHeaderNavDialogStore} dark={dark} />
        )}
      </div>
    </div>
  );
};

export default Header;
