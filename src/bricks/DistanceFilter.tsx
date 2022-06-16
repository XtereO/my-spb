import { FormItem, SegmentedControl } from "@vkontakte/vkui";
import { memo, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import { useDispatch } from "react-redux";
import { mainActions } from "../bll/main";
import { Filter } from "../types";

type Props = {
  id: string;
  defaultLabel?: string;
  value: Filter;
  onChange?: (value: "default" | "distance") => void;
};

export const DistanceFilter = memo<Props>(
  ({ defaultLabel, value, onChange, id }) => {
    const dispatch = useDispatch();
    //@ts-ignore
    useEffect(async () => {
      if (value === "distance") {
        const data = await bridge.send("VKWebAppGetGeodata");
        console.log(data);
        if (data.available === 1 && data.lat && data.long) {
          dispatch(mainActions.setUserCoordinates([data.lat, data.long]));
        } else if (onChange) {
          onChange("default");
        }
      }
    }, [value]);
    return (
      <FormItem id={id} top="Сортировка">
        <SegmentedControl
          id="distance-filter-control"
          size="l"
          value={value}
          //@ts-ignore
          onChange={onChange}
          options={[
            {
              label: defaultLabel ?? "По умолчанию",
              value: "default",
            },
            {
              label: "По расстоянию",
              value: "distance",
            },
          ]}
        />
      </FormItem>
    );
  }
);
