import { Div, PanelHeader } from "@vkontakte/vkui";
import { memo, useCallback } from "react";
import { ChevronLeftIcon } from "../icons";

type Props = {
  id: string;
};

export const PanelHeaderBack = memo<Props>(({ id }) => {
  const handleClick = useCallback(() => {
    window.history.back();
  }, []);
  return (
    <PanelHeader
      left={
        <Div onClick={handleClick}>
          <ChevronLeftIcon />
        </Div>
      }
      separator={false}
      id={id}
    />
  );
});
