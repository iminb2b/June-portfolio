import Link from "next/link";
import { FC } from "react";
import { css } from "@emotion/react";
import { NavInfo } from "./NavList";
import colors from "@/value/colors";

const link = ({ dark }: { dark: boolean }) => css`
  transition: all 0.3s ease;
  position: relative;
  font-size: 1.25rem;

  &:hover {
    &::after {
      content: "";
      position: absolute;
      bottom: -4px;
      height: 2px;
      background-color: ${dark ? colors.white : colors.textPrimary};
      width: 80%;
      left: 10%;
    }
  }
`;

const activeLink = ({ dark }: { dark: boolean }) => css`
  color: ${dark ? colors.yellow : colors.black};
  position: relative;
  font-size: 1.25rem;

  &::after {
    content: "";
    position: absolute;
    bottom: -4px;
    height: 2px;
    background-color: ${dark ? colors.yellow : colors.black};
    width: 80%;
    left: 10%;
  }
`;

const NavListItem: FC<{
  item: NavInfo;
  isActive: boolean;
  dark: boolean;
}> = ({ item, dark, isActive }) => {
  return (
    <Link
      href={item.url}
      css={isActive ? activeLink({ dark }) : link({ dark })}
    >
      {item.name}
    </Link>
  );
};

export default NavListItem;
