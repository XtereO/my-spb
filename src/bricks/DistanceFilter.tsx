import { FormItem, SegmentedControl } from "@vkontakte/vkui";
import { memo } from "react";

type Props = {
  defaultLabel?: string;
  value: "default" | "distance";
  onChange?: (value: "default" | "distance") => void;
};

export const DistanceFilter = memo<Props>(
  ({ defaultLabel, value, onChange }) => {
    return (
      <FormItem id="distance-filter" top="Сортировка">
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
