import { Div, Header } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";

type Props = {
  id: string;
  children: React.ReactNode;
};

export const MainHeader = memo<Props>(({ id, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <Div
      id={id}
      style={{ color: theme.heading, fontWeight: 700, fontSize: 22 }}
    >
      {children}
    </Div>
  );
});
