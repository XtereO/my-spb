import { Button } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";
import { TextInterMedium } from "./Fonts";

type Props = {
  id: string;
  type?: "submit";
  size?: "l" | "m" | "s";
  onClick?: () => void;
  children: React.ReactNode;
};

export const ThemedButton = memo<Props>(
  ({ id, children, size, onClick, type }) => {
    const theme = useContext(ThemeContext);
    return (
      <Button
        type={type}
        id={id}
        size={size ?? "m"}
        onClick={onClick}
        style={{ background: theme.btnBg, color: theme.btnText }}
      >
        <TextInterMedium>{children}</TextInterMedium>
      </Button>
    );
  }
);
