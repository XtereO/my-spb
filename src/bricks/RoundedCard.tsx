import { Card } from "@vkontakte/vkui";
import React from "react";
import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";

type Props = {
  id: string;
  background?: string;
  children: React.ReactNode;
};

export const RoundedCard = React.forwardRef(
  ({ id, background, children }: Props, ref) => {
    const theme = useContext(ThemeContext);
    return (
      //@ts-ignore
      <div ref={ref}
        style={{ 
          background: background ?? theme.cardBg,
          borderRadius: 21,
          height: "100%",
        }}
      >
        {children}
      </div>
    );
  }
);
