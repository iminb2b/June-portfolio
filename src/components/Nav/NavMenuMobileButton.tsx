import { DialogDisclosure, DialogStore } from "@ariakit/react/dialog";
import { css } from "@emotion/react";
import { FC, memo } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import colors from "@/value/colors";
const iconTextColumn = css`
  background-color: transparent;
  border: none;
  @media screen and (min-width: 720px) {
    display: none;
  }
`;

const icon = ({ dark }: { dark: boolean }) => css`
  font-size: 2rem;
  color: ${dark ? colors.white : colors.black};
`;

const NavMenuMobileButton: FC<{
  dialogStore: DialogStore;
  dark: boolean;
}> = memo(({ dialogStore, dark }) => {
  const dialogIsMounted = dialogStore.useState("mounted");

  return (
    <DialogDisclosure css={iconTextColumn} store={dialogStore}>
      {dialogIsMounted ? (
        <CloseIcon css={icon({ dark })} />
      ) : (
        <MenuIcon css={icon({ dark })} />
      )}
    </DialogDisclosure>
  );
});

export default NavMenuMobileButton;
