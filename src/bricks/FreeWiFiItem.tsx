import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";

type Props = {
  id?: number;
  address: string;
  status: "Работает" | "Не работает";
};

export const FreeWiFiItem = memo<Props>(({ id, address, status }) => {
  const theme = useContext(ThemeContext);
  const background =
    status === "Работает" ? theme.wifiTurnedOnBg : theme.wifiTurnedOffBg;
  return (
    <div
      id={`free-wifi-item${id}`}
      style={{ display: "flex", flexDirection: "row" }}
    >
      <div className="center-y">
        <div
          className="center-x"
          style={{
            height: 14,
            width: 14,
            fontSize: 10,
            borderRadius: 20000,
            background,
            color: theme.wifiIndicatorText,
          }}
          id={`free-wifi-item${id}-indicator`}
        >
          <div>{id}</div>
        </div>
      </div>
      <div
        style={{
          color: theme.text,
          fontSize: 14,
          marginLeft: 4,
          fontWeight: 500,
        }}
        id={`free-wifi-item${id}-title`}
      >
        {address}
      </div>
    </div>
  );
});
