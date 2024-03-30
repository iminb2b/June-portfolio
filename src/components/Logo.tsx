import Link from "next/link";
import { FC, useContext } from "react";
import { css } from "@emotion/react";
import routeLinks from "@/routeLinks";
import { AppContext } from "@/context/AppContext";
import logoIcon from "@/assets/img/icon-layout.png";
import Image from "next/image";

const logo = css`
  font-size: 2rem;
  font-weight: 700;
  transition: all 0.3s ease;
`;

const Logo: FC = () => {
  return (
    <Link href={routeLinks.homePage()} css={logo}>
      <Image src={logoIcon.src} height={40} width={40} alt="June" />
    </Link>
  );
};

export default Logo;
