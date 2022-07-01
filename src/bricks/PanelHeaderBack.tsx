import { Div, PanelHeader } from "@vkontakte/vkui";
import { memo } from "react";
import { useDispatch } from "react-redux";
import { mainActions } from "../bll/main";
import { PANEL_ROUTES } from "../consts";
import { ChevronLeftIcon } from "../icons";

type Props = {
  id: string;
  onClick?: () => void;
};

export const PanelHeaderBack = memo<Props>(({ id, onClick }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(mainActions.setActivePanel(PANEL_ROUTES.HOME));
  };
  return (
    <PanelHeader
      left={
        <Div onClick={onClick ?? handleClick}>
          <ChevronLeftIcon />
        </Div>
      }
      separator={false}
      id={id}
    />
  );
});
