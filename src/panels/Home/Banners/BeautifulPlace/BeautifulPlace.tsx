import { Cell, Div, Group, HorizontalScroll } from "@vkontakte/vkui";
import { useCallback } from "react";
import { memo, useContext } from "react";
import { useDispatch } from "react-redux";
import { mainActions } from "../../../../bll/main";
import {
  CardHeader,
  HorizontalPlace,
  RoundedCard,
  ThemedButton,
} from "../../../../bricks";
import { PANEL_ROUTES } from "../../../../consts";
import { LocationMapOutlineIcon } from "../../../../icons";
import { ThemeContext } from "../../../../utils";

export const BeautifulPlace = memo(() => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(mainActions.setActivePanel(PANEL_ROUTES.BEAUTIFUL_PLACE));
  }, []);
  return (
    <RoundedCard id="beautiful-place">
      <CardHeader
        id="beautiful-place-header"
        before={<LocationMapOutlineIcon />}
      >
        Красивые места
      </CardHeader>
      <Group style={{ paddingLeft: 16, paddingRight: 16, paddingBottom: 12 }}>
        <div
          id="horizontal-scroll"
          style={{
            display: "flex",
            flexDirection: "row",
            overflowX: "scroll",
          }}
        >
          <HorizontalPlace
            title="Glacier"
            imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          />
          <HorizontalPlace
            title="Glacier"
            imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          />
          <HorizontalPlace
            title="Glacier"
            imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          />
          <HorizontalPlace
            title="Glacier"
            imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          />
          <HorizontalPlace
            title="Glacier"
            imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          />
        </div>
        <div style={{ marginTop: 14 }}>
          <ThemedButton onClick={handleClick} id="beautiful-place-btn">
            Посмотреть все места
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
