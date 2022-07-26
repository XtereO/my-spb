import {
  FixedLayout,
  Footer,
  FormItem,
  IconButton,
  SegmentedControl,
  Spinner,
} from "@vkontakte/vkui";
import { memo, useCallback, useContext, useEffect, useState } from "react";
import bridge from "@vkontakte/vk-bridge";
import { useDispatch } from "react-redux";
import { mainActions } from "../bll/main";
import { Filter } from "../types";
import { Icon28RefreshOutline } from "@vkontakte/icons";
import { TextSFProRoundedBold, TextSFProTextMedium } from "./Fonts";
import { CustomizedSnackbar } from "./CustomizedSnackbar";
import { ThemeContext } from "../utils";

type Props = {
  id: string;
  defaultLabel?: string;
  value: Filter;
  onChange?: (value: "default" | "distance") => void;
};

export const DistanceFilter = memo<Props>(
  ({ defaultLabel, value, onChange, id }) => {
    const theme = useContext(ThemeContext);
    const dispatch = useDispatch();
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const errorMessage =
      "Проверьте геолокацию на телефоне и попробуйте еще раз";
    const requestGeodata = useCallback(() => {
      setError(null);
      setLoading(true);
      bridge
        .send("VKWebAppGetGeodata")
        .then((data) => {
          if (!!data.available && data.lat && data.long) {
            dispatch(mainActions.setUserCoordinates([data.lat, data.long]));
          } else {
            setError(errorMessage);
          }
        })
        .catch(() => setError(errorMessage))
        .finally(() => setLoading(false));
    }, []);
    useEffect(() => {
      if (value === "distance") {
        requestGeodata();
      } else {
        setLoading(false);
        setError(null);
      }
      return () => {
        dispatch(mainActions.setUserCoordinates(null));
      };
    }, [value]);
    return (
      <div>
        <FormItem
          id={id}
          top={<TextSFProRoundedBold>Сортировка</TextSFProRoundedBold>}
        >
          <SegmentedControl
            id={`${id}-control`}
            size="l"
            value={value}
            //@ts-ignore
            onChange={onChange}
            options={[
              {
                label: (
                  <TextSFProTextMedium>
                    {defaultLabel ?? "По умолчанию"}
                  </TextSFProTextMedium>
                ),
                value: "default",
              },
              {
                label: <TextSFProTextMedium>По расстоянию</TextSFProTextMedium>,
                value: "distance",
              },
            ]}
          />
        </FormItem>
        {!isLoading && error && (
          <Footer className="center-x" style={{ width: "100%" }}>
            <IconButton onClick={requestGeodata}>
              <Icon28RefreshOutline fill={theme.icon} />
            </IconButton>
          </Footer>
        )}
        {isLoading && (
          <Footer>
            <Spinner size="large" />
          </Footer>
        )}
        {error && (
          <FixedLayout vertical="bottom">
            <CustomizedSnackbar text={error} isSuccess={false} />
          </FixedLayout>
        )}
      </div>
    );
  }
);
