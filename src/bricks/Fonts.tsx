import React, { ReactElement } from "react";

const ComponentWithFontByFontTitleCreator = (fontTitle: string) => {
  type Props = {
    children: React.ReactNode;
  };
  const TextWithFont = React.memo<Props>(({ children }) => {
    return <span className={fontTitle}>{children}</span>;
  });
  return TextWithFont;
};

export const TextSFProRoundedSemibold = ComponentWithFontByFontTitleCreator(
  "text__SF-Pro-Rounded-Semibold"
);
export const TextInterMedium =
  ComponentWithFontByFontTitleCreator("text__Inter-Medium");
export const TextInterSemibold = ComponentWithFontByFontTitleCreator(
  "text__Inter-SemiBold"
);
export const TextInterRegular = ComponentWithFontByFontTitleCreator(
  "text__Inter-Regular"
);
export const TextSFProRoundedRegular = ComponentWithFontByFontTitleCreator(
  "text__SF-Pro-Rounded-Regular"
);
export const TextSFProRoundedMedium = ComponentWithFontByFontTitleCreator(
  "text__SF-Pro-Rounded-Medium"
);
export const TextSFProRoundedLight = ComponentWithFontByFontTitleCreator(
  "text__SF-Pro-Rounded-Light"
);
export const TextSFProRoundedBold = ComponentWithFontByFontTitleCreator(
  "text__SF-Pro-Rounded-Bold"
);
export const TextInterBold =
  ComponentWithFontByFontTitleCreator("text__Inter-Bold");
export const TextSFProTextRegular = ComponentWithFontByFontTitleCreator(
  "text__SF-Pro-Text-Regular"
);
export const TextSFProTextSemibold = ComponentWithFontByFontTitleCreator(
  "text__SF-Pro-Text-Semibold"
);
export const TextSFProTextMedium = ComponentWithFontByFontTitleCreator(
  "text__SF-Pro-Text-Medium"
);
