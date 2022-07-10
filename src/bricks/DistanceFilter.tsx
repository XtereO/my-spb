import { FormItem, SegmentedControl } from "@vkontakte/vkui";
import { memo, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { useDispatch } from "react-redux";
import { mainActions } from "../bll/main";
import { Filter } from "../types";
import { TextSFProRoundedBold, TextSFProTextMedium } from "./Fonts";

type Props = {
  id: string;
  defaultLabel?: string;
  value: Filter;
  onChange?: (value: "default" | "distance") => void;
};

export const DistanceFilter = memo<Props>(
  ({ defaultLabel, value, onChange, id }) => {
    const dispatch = useDispatch();
    useEffect(() => {
      if (value === "distance") {
        bridge.send("VKWebAppGetGeodata").then((data) => {
          if (!!data.available && data.lat && data.long) {
            dispatch(mainActions.setUserCoordinates([data.lat, data.long]));
          } else if (onChange) {
            onChange("default");
          }
        });
      }
    }, [value]);
    return (
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
    );
  }
);
