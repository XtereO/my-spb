import { Group, Panel } from "@vkontakte/vkui";
import { memo } from "react";
import {
  DistanceFilter,
  MainHeader,
  PanelHeaderBack,
  VerticalPlace,
} from "../../bricks";
import { PANEL_ROUTES } from "../../consts";

export const BeautifulPlace = memo(() => {
  return (
    <Panel id={PANEL_ROUTES.BEAUTIFUL_PLACE}>
      <PanelHeaderBack id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-back`} />
      <MainHeader id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-header`}>
        Красивые места
      </MainHeader>
      <DistanceFilter
        id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-filter`}
        value={"default"}
      />
      <Group
        id={`${PANEL_ROUTES.BEAUTIFUL_PLACE}-list`}
        style={{
          marginTop: -12,
          paddingBottom: 12,
          paddingRight: 16,
          paddingLeft: 16,
        }}
      >
        <VerticalPlace
          id={"1"}
          distance={1230}
          imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          title="Glacier"
        />
        <VerticalPlace
          id={"1"}
          imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          title="Glacier"
        />
        <VerticalPlace
          id={"1"}
          imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          title="Glacier"
        />
        <VerticalPlace
          id={"1"}
          imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          title="Glacier"
        />
        <VerticalPlace
          id={"1"}
          imgSrc="https://www.journeygazer.com/wp-content/uploads/2019/03/torres-del-paine-Glaciers5.jpg"
          title="Glacier"
        />
      </Group>
    </Panel>
  );
});
