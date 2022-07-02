import { Button } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";
import { TextInterSemibold } from "./Fonts";

type Props = {
  id: string;
  type?: "submit";
  fontSize?: number;
  size?: "l" | "m" | "s";
  onClick?: () => void;
  children: React.ReactNode;
};

export const ThemedButton = memo<Props>(
  ({ id, children, size, fontSize, onClick, type }) => {
    const theme = useContext(ThemeContext);
    return (
      <Button
        type={type}
        id={id}
        size={size ?? "l"}
        onClick={onClick}
        style={{
          background: theme.btnBg,
          color: theme.btnText,
        }}
      >
        <TextInterSemibold>
          <span style={{ fontSize, letterSpacing: -0.41 }}>{children}</span>
        </TextInterSemibold>
      </Button>
    );
  }
);
