import { useContext } from "react";
import { memo } from "react";
import { ThemeContext } from "../utils";

export const LockOpenOutlineIcon = memo(() => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 12.8571C12.9734 12.8571 13.3572 13.2409 13.3572 13.7143V16.2857C13.3572 16.7591 12.9734 17.1429 12.5 17.1429C12.0266 17.1429 11.6429 16.7591 11.6429 16.2857V13.7143C11.6429 13.2409 12.0266 12.8571 12.5 12.8571Z"
        fill={theme.text}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.35716 6.85714C7.35716 4.01682 9.6597 1.71429 12.5 1.71429C14.9891 1.71429 17.0634 3.48168 17.54 5.82949C17.6342 6.29341 17.3344 6.74584 16.8705 6.84001C16.4066 6.93418 15.9542 6.63444 15.86 6.17051C15.6899 5.33244 15.2136 4.60548 14.5532 4.11106C13.9809 3.68245 13.2701 3.42857 12.5 3.42857C10.6065 3.42857 9.07145 4.9636 9.07145 6.85714V8.57143L16.1354 8.57143C16.8254 8.57142 17.3948 8.57141 17.8587 8.60931C18.3405 8.64867 18.7834 8.73316 19.1994 8.94512C19.8445 9.27383 20.369 9.79834 20.6978 10.4435C20.9097 10.8595 20.9942 11.3024 21.0336 11.7842C21.0715 12.248 21.0715 12.8175 21.0714 13.5074V17.3497C21.0715 18.0397 21.0715 18.6091 21.0336 19.073C20.9942 19.5548 20.9097 19.9977 20.6978 20.4137C20.369 21.0588 19.8445 21.5833 19.1994 21.912C18.7834 22.124 18.3405 22.2085 17.8587 22.2478C17.3948 22.2857 16.8254 22.2857 16.1354 22.2857H8.86464C8.17466 22.2857 7.6052 22.2857 7.14131 22.2478C6.65951 22.2085 6.21662 22.124 5.80062 21.912C5.1555 21.5833 4.63099 21.0588 4.30228 20.4137C4.09032 19.9977 4.00584 19.5548 3.96647 19.073C3.92857 18.6091 3.92858 18.0397 3.92859 17.3497V13.5075C3.92858 12.8175 3.92857 12.248 3.96647 11.7842C4.00584 11.3024 4.09032 10.8595 4.30228 10.4435C4.63099 9.79834 5.1555 9.27383 5.80062 8.94512C6.21662 8.73316 6.65951 8.64867 7.14131 8.60931C7.21087 8.60363 7.2828 8.5988 7.35716 8.59469V6.85714ZM8.90002 10.2857C8.16581 10.2857 7.6667 10.2864 7.28091 10.3179C6.90512 10.3486 6.71295 10.4043 6.57889 10.4726C6.25633 10.6369 5.99408 10.8992 5.82972 11.2217C5.76142 11.3558 5.70577 11.548 5.67506 11.9237C5.64354 12.3095 5.64288 12.8086 5.64288 13.5429V17.3143C5.64288 18.0485 5.64354 18.5476 5.67506 18.9334C5.70577 19.3092 5.76142 19.5014 5.82972 19.6354C5.99408 19.958 6.25633 20.2202 6.57889 20.3846C6.71295 20.4529 6.90512 20.5085 7.28091 20.5392C7.6667 20.5708 8.16581 20.5714 8.90002 20.5714H16.1C16.8342 20.5714 17.3333 20.5708 17.7191 20.5392C18.0949 20.5085 18.2871 20.4529 18.4211 20.3846C18.7437 20.2202 19.006 19.958 19.1703 19.6354C19.2386 19.5014 19.2943 19.3092 19.325 18.9334C19.3565 18.5476 19.3572 18.0485 19.3572 17.3143V13.5429C19.3572 12.8086 19.3565 12.3095 19.325 11.9237C19.2943 11.548 19.2386 11.3558 19.1703 11.2217C19.006 10.8992 18.7437 10.6369 18.4211 10.4726C18.2871 10.4043 18.0949 10.3486 17.7191 10.3179C17.3333 10.2864 16.8342 10.2857 16.1 10.2857H8.90002Z"
        fill={theme.text}
      />
    </svg>
  );
});