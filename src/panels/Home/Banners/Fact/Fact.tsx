import { Group } from "@vkontakte/vkui";
import { useContext, useEffect } from "react";
import { memo } from "react";
import parse from "html-react-parser";
import { CardHeader, RoundedCard, ThemedButton } from "../../../../bricks";
import { LightbalbStarOutlineIcon } from "../../../../icons";
import { removeHrefs, ThemeContext } from "../../../../utils";
import "./Fact.css";
import { useDispatch } from "react-redux";
import { factActions, useGetFactQuery } from "../../../../bll/fact";
import { Fact as FactType } from "../../../../types";

type Props = {
  data?: FactType;
  onClick: () => void;
};

export const Fact = memo<Props>(({ onClick, data }) => {
  const limitedSymbolText = 163;
  const theme = useContext(ThemeContext);
  const dispatch = useDispatch();
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
            parse(removeHrefs(data?.text).slice(0, limitedSymbolText) + "...")}
        </div>
        <div style={{ marginTop: 10 }}>
          <ThemedButton onClick={onClick} id="fact-btn">
            Читать полностью
          </ThemedButton>
        </div>
      </Group>
    </RoundedCard>
  );
});
