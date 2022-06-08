import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";

export const ChevronLeftIcon = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      width="20"
      height="28"
      viewBox="0 0 20 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.9595 4.48053C15.5225 5.01045 15.5494 5.89648 15.0195 6.45952L7.92252 14L15.0195 21.5405C15.5494 22.1035 15.5225 22.9896 14.9595 23.5195C14.3964 24.0494 13.5104 24.0226 12.9805 23.4595L4.9805 14.9595C4.47314 14.4205 4.47314 13.5796 4.9805 13.0405L12.9805 4.5405C13.5104 3.97746 14.3964 3.95061 14.9595 4.48053Z"
        fill={theme.heading}
      />
    </svg>
  );
});
