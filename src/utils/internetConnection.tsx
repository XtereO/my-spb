import { mainActions } from "../bll/main";
import { store } from "../bll/store";
import { PANEL_ROUTES } from "../consts";

const dispatch = store.dispatch;
export const toOffline = () => {
  dispatch(mainActions.setActivePanel(PANEL_ROUTES.OFFLINE));
};

export const toOnline = () => {
  dispatch(mainActions.setActivePanel(PANEL_ROUTES.HOME));
};
