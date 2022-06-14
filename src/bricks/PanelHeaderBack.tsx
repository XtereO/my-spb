import { PanelHeader } from "@vkontakte/vkui";
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
    <PanelHeader separator={false} id={id}>
      <div onClick={onClick ?? handleClick}>
        <ChevronLeftIcon />
      </div>
    </PanelHeader>
  );
});
