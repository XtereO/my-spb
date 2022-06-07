import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";

export const LocationMapOutlineIcon = memo(() => {
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
        d="M14 11C15.1046 11 16 10.1046 16 9C16 7.89543 15.1046 7 14 7C12.8954 7 12 7.89543 12 9C12 10.1046 12.8954 11 14 11Z"
        fill={theme.icon}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 9C7 5.13401 10.134 2 14 2C17.866 2 21 5.13401 21 9C21 13.5059 17.9618 17.2417 16.1551 19.0821C14.9565 20.303 13.0435 20.303 11.8449 19.0821C10.0382 17.2417 7 13.5059 7 9ZM14 4C11.2386 4 9 6.23858 9 9C9 12.6671 11.5282 15.9046 13.2721 17.681C13.6868 18.1034 14.3132 18.1034 14.7279 17.681C16.4718 15.9046 19 12.6671 19 9C19 6.23858 16.7614 4 14 4Z"
        fill={theme.icon}
      />
      <path
        d="M7.26215 16.5724C7.62159 16.9917 7.57307 17.623 7.15377 17.9825C6.3718 18.6528 6 19.3927 6 20C6 20.8526 6.63388 21.8348 8.12168 22.6614C9.57561 23.4691 11.6519 24 14 24C16.3481 24 18.4244 23.4691 19.8783 22.6614C21.3661 21.8348 22 20.8526 22 20C22 19.3759 21.6575 18.6854 20.8565 18.0122C20.4338 17.6568 20.3791 17.026 20.7345 16.6032C21.0899 16.1805 21.7207 16.1258 22.1435 16.4812C23.2212 17.3871 24 18.5894 24 20C24 21.9088 22.6192 23.4266 20.8496 24.4097C19.0462 25.4116 16.6225 26 14 26C11.3775 26 8.95383 25.4116 7.1504 24.4097C5.38084 23.4266 4 21.9088 4 20C4 18.6048 4.80973 17.3576 5.85209 16.4641C6.27139 16.1046 6.9027 16.1531 7.26215 16.5724Z"
        fill={theme.icon}
      />
    </svg>
  );
});
