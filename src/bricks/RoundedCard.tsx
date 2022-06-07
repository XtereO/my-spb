import { Card } from "@vkontakte/vkui";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";

type Props = {
  id: string;
  background?: string;
  children: React.ReactNode;
};

export const RoundedCard = memo<Props>(({ children, background, id }) => {
  const theme = useContext(ThemeContext);
  return (
    <Card
      id={id}
      style={{ background: background ?? theme.cardBg, borderRadius: 21 }}
    >
      {children}
    </Card>
  );
});
