import { memo } from "react";
import { useContext } from "react";
import { ThemeContext } from "../utils";

export const LightbalbStarOutlineIcon = memo(() => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4C9.58172 4 6 7.58172 6 12C6 14.2996 6.76419 15.7071 7.71029 16.8591C8.10053 17.3343 8.51155 17.7548 8.94368 18.197C9.06267 18.3188 9.1833 18.4422 9.30551 18.5689C9.72562 19.0042 10.16 19.4736 10.5375 20H13V17.5L11.4 16.3C10.9582 15.9686 10.8686 15.3418 11.2 14.9C11.5314 14.4582 12.1582 14.3686 12.6 14.7L14 15.75L15.4 14.7C15.8418 14.3686 16.4686 14.4582 16.8 14.9C17.1314 15.3418 17.0418 15.9686 16.6 16.3L15 17.5V20H17.4628C17.9365 19.3404 18.5094 18.7555 19.0381 18.2156C19.116 18.136 19.1937 18.0567 19.2692 17.979C20.0115 17.2155 20.6893 16.4727 21.1898 15.5308C21.4489 15.0431 22.0544 14.8578 22.5421 15.1169C23.0298 15.3761 23.2151 15.9815 22.956 16.4692C22.3121 17.6809 21.4587 18.5961 20.7033 19.3731C20.6274 19.4511 20.553 19.5273 20.4802 19.602C19.8396 20.2583 19.316 20.7948 18.9323 21.3939L18.4246 23.4246L18.3931 23.5517C18.2648 24.0701 18.1365 24.5892 17.83 24.9984C17.5635 25.3543 17.207 25.6327 16.7972 25.8048C16.3258 26.0029 15.7911 26.0016 15.257 26.0002L15.1261 26H12.8739L12.743 26.0002C12.2089 26.0016 11.6742 26.0029 11.2028 25.8048C10.793 25.6327 10.4365 25.3543 10.17 24.9984C9.86354 24.5892 9.73516 24.0701 9.60692 23.5517L9.57538 23.4246L9.06773 21.394C8.76283 20.9186 8.35807 20.4672 7.86636 19.9577C7.76299 19.8506 7.65503 19.7402 7.5439 19.6266C7.10448 19.1773 6.61549 18.6773 6.16471 18.1284C4.98581 16.6929 4 14.8504 4 12C4 6.47715 8.47715 2 14 2C15.5947 2 17.1049 2.37401 18.445 3.04001C18.9396 3.28579 19.1413 3.88597 18.8955 4.38055C18.6497 4.87513 18.0495 5.07682 17.555 4.83103C16.4852 4.2994 15.279 4 14 4ZM11.5157 22.9396L11.2808 22H16.7192L16.4843 22.9396C16.2993 23.6796 16.26 23.7584 16.2291 23.7997C16.1758 23.8709 16.1045 23.9265 16.0225 23.961C15.975 23.9809 15.889 24 15.1261 24H12.8739C12.111 24 12.025 23.9809 11.9775 23.961C11.8955 23.9265 11.8242 23.8709 11.7709 23.7997C11.74 23.7584 11.7007 23.6796 11.5157 22.9396ZM20.9563 4.36634C21.1308 3.84289 21.8712 3.84289 22.0457 4.36634L22.6337 6.13058C22.8242 6.70206 23.2727 7.1505 23.8441 7.34099L25.6084 7.92907C26.1318 8.10355 26.1318 8.84396 25.6084 9.01844L23.8441 9.60652C23.2727 9.79701 22.8242 10.2454 22.6337 10.8169L22.0457 12.5812C21.8712 13.1046 21.1308 13.1046 20.9563 12.5812L20.3682 10.8169C20.1777 10.2455 19.7293 9.79701 19.1578 9.60652L17.3936 9.01844C16.8701 8.84396 16.8701 8.10355 17.3936 7.92907L19.1578 7.34099C19.7293 7.1505 20.1777 6.70206 20.3682 6.13058L20.9563 4.36634Z"
        fill={theme.icon}
      />
    </svg>
  );
});