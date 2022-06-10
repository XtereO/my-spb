import { Cell, Div } from "@vkontakte/vkui";
import { memo, useContext } from "react";
import { ThemeContext } from "../utils";

type Props = {
  id: string;
  before?: React.ReactNode;
  children: React.ReactNode;
};

export const CardHeader = memo<Props>(({ id, before, children }) => {
  const theme = useContext(ThemeContext);
  return (
    <Cell disabled before={before} id={id}>
      <Div
        id={id.replace("header", "title")}
        className="heading-large"
        style={{ color: theme.heading }}
      >
        {children}
      </Div>
    </Cell>
  );
});
