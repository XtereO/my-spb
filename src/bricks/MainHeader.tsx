import { Div, Header } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";
import { TextInterBold } from "./Fonts";

type Props = {
  id: string;
  children: React.ReactNode;
};

export const MainHeader = memo<Props>(({ id, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <Div
      id={id}
      style={{ color: theme.heading, fontSize: 22 }}
    >
      <TextInterBold>{children}</TextInterBold>
    </Div>
  );
});
