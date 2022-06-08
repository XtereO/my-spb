import { memo } from "react";
import { useContext } from "react";
import { ThemeContext } from "../utils";

export const ArticleOutline = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 7C3 6.44772 3.44772 6 4 6H12C12.5523 6 13 6.44772 13 7C13 7.55229 12.5523 8 12 8L9 8V15C9 15.5523 8.55228 16 8 16C7.44772 16 7 15.5523 7 15V8L4 8C3.44772 8 3 7.55228 3 7Z"
        fill={theme.icon}
      />
      <path
        d="M17 8C16.4477 8 16 8.44772 16 9C16 9.55228 16.4477 10 17 10L24 10C24.5523 10 25 9.55228 25 9C25 8.44771 24.5523 8 24 8L17 8Z"
        fill={theme.icon}
      />
      <path
        d="M12 15C12 14.4477 12.4477 14 13 14L24 14C24.5523 14 25 14.4477 25 15C25 15.5523 24.5523 16 24 16L13 16C12.4477 16 12 15.5523 12 15Z"
        fill={theme.icon}
      />
      <path
        d="M7 21C7 20.4477 7.44772 20 8 20L24 20C24.5523 20 25 20.4477 25 21C25 21.5523 24.5523 22 24 22L8 22C7.44772 22 7 21.5523 7 21Z"
        fill={theme.icon}
      />
    </svg>
  );
});
