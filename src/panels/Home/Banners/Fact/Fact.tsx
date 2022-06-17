import { Cell, Div, Group } from "@vkontakte/vkui";
import { useContext, useEffect } from "react";
import { memo } from "react";
import parse from "html-react-parser";
import { CardHeader, RoundedCard, ThemedButton } from "../../../../bricks";
import { PANEL_ROUTES } from "../../../../consts";
import { LightbalbStarOutlineIcon } from "../../../../icons";
import { removeHrefs, ThemeContext } from "../../../../utils";
import "./Fact.css";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { mainActions } from "../../../../bll/main";
import { factActions, useGetFactQuery } from "../../../../bll/fact";

export const Fact = memo(() => {
  const limitedSymbolText = 163;
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    dispatch(mainActions.setActivePanel(PANEL_ROUTES.FACT));
  }, []);
  const date = new Date();
  const { data } = useGetFactQuery({
    day: date.getDate(),
    month: date.getMonth() + 1,
  });
  useEffect(() => {
    if (data) {
      dispatch(factActions.setFact(data));
    }
  }, [data]);

  return (
    <RoundedCard id="fact">
      <CardHeader id="fact-header" before={<LightbalbStarOutlineIcon />}>
        Факт
      </CardHeader>
      <Group style={{ paddingRight: 16, paddingLeft: 16, paddingBottom: 12 }}>
        <div
          id="fact-title"
          className="heading-small"
          style={{ color: theme.heading, marginTop: -10 }}
        >
          {data?.title}
        </div>
        <div
          id="fact-date"
          className="heading-small"
          style={{ color: theme.heading, marginTop: 4 }}
        >
          {data?.date_txt}
        </div>
        <div
          id="fact-description"
          className="text"
          style={{ color: theme.text, marginTop: 4 }}
        >
          {data?.text &&
            parse(
              removeHrefs(data?.text).slice(0, limitedSymbolText) + "..."
            )}
        </div>
        <div style={{ marginTop: 10 }}>
          <ThemedButton onClick={handleClick} id="fact-btn">
            Читать полностью
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
