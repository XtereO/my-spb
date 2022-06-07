import { Button } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";

type Props = {
  id: string;
  size?: "l" | "m" | "s";
  onClick?: () => void;
  children: React.ReactNode;
};

export const ThemedButton = memo<Props>(({ id, children, size, onClick }) => {
  const theme = useContext(ThemeContext);
  return (
    <Button
      id={id}
      size={size ?? "m"}
      onClick={onClick}
      style={{ background: theme.btnBg, color: theme.btnText }}
    >
      {children}
    </Button>
  );
});
