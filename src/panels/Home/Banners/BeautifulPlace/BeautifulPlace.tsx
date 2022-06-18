import { Group } from "@vkontakte/vkui";
import { useCallback, useEffect } from "react";
import { memo } from "react";
import { useDispatch } from "react-redux";
import {
  beautifulPlaceActions,
  useGetBeautifulPlacesQuery,
} from "../../../../bll/beautiful-place";
import { mainActions } from "../../../../bll/main";
import {
  CardHeader,
  HorizontalPlace,
  RoundedCard,
  ThemedButton,
} from "../../../../bricks";
import { PANEL_ROUTES } from "../../../../consts";
import { LocationMapOutlineIcon } from "../../../../icons";

export const BeautifulPlace = memo(() => {
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(mainActions.setActivePanel(PANEL_ROUTES.BEAUTIFUL_PLACE));
  }, []);
  const { data } = useGetBeautifulPlacesQuery({});
  useEffect(() => {
    if (data) {
      dispatch(beautifulPlaceActions.setBeautifulPlaces(data));
    }
  }, [data]);

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
          {data?.slice(0, 5).map((d) => (
            <HorizontalPlace
              key={d.description}
              title={d.name ?? d.description}
              pathToPhoto={d.path_to_photo}
            />
          ))}
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
