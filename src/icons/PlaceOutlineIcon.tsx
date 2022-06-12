import { memo } from "react";
import { useContext } from "react";
import { ThemeContext } from "../utils";

export const PlaceOutlineIcon = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.7143 10.2984C19.7143 6.03129 16.2609 2.57143 12.0001 2.57143C7.73921 2.57143 4.28577 6.03129 4.28577 10.2984C4.28577 13.3393 6.15363 17.0098 9.84035 21.3688C10.8492 22.5616 12.6339 22.7107 13.8267 21.7019C13.9468 21.6003 14.0582 21.4889 14.1597 21.3688C17.8465 17.0098 19.7143 13.3393 19.7143 10.2984ZM12.7196 20.393C12.2497 20.7904 11.5467 20.7316 11.1493 20.2617C7.70012 16.1837 6.00005 12.8429 6.00005 10.2984C6.00005 6.97735 8.6867 4.28572 12.0001 4.28572C15.3134 4.28572 18.0001 6.97735 18.0001 10.2984C18.0001 12.8429 16.3 16.1837 12.8508 20.2617C12.8108 20.3091 12.7669 20.3529 12.7196 20.393ZM8.57148 10.2857C8.57148 8.39266 10.107 6.85714 12.0001 6.85714C13.8931 6.85714 15.4286 8.39266 15.4286 10.2857C15.4286 12.1788 13.8931 13.7143 12.0001 13.7143C10.107 13.7143 8.57148 12.1788 8.57148 10.2857ZM10.2858 10.2857C10.2858 11.232 11.0538 12 12.0001 12C12.9463 12 13.7143 11.232 13.7143 10.2857C13.7143 9.33943 12.9463 8.57143 12.0001 8.57143C11.0538 8.57143 10.2858 9.33943 10.2858 10.2857Z"
        fill={theme.text}
      />
    </svg>
  );
});