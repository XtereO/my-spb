import { memo } from "react";
import { useContext } from "react";
import { ThemeContext } from "../utils";

export const CarOutlineIcon = memo(() => {
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M9.67253 4.28575L9.8189 4.28579H14.181L14.3274 4.28575C15.4162 4.28531 16.1685 4.285 16.8499 4.52003C17.4504 4.72717 17.9974 5.06521 18.4512 5.50971C18.9662 6.01407 19.3023 6.68703 19.7888 7.66112L19.8543 7.79204L20.6726 9.42865H21.8571C22.3305 9.42865 22.7143 9.81241 22.7143 10.2858V10.589C22.7143 11.3885 22.1399 12.0128 21.4285 12.1543V15.4287H21.4286V17.3144L21.4286 17.3342L21.4286 17.3762V19.0972L21.4286 19.1158C21.4286 19.2068 21.4287 19.32 21.4205 19.4204C21.4109 19.5377 21.386 19.7107 21.2931 19.8929C21.174 20.1268 20.9838 20.3169 20.75 20.436C20.5677 20.5289 20.3947 20.5538 20.2774 20.5634C20.1771 20.5716 20.0639 20.5716 19.9729 20.5715L19.9543 20.5715H19.4743L19.4557 20.5715C19.3647 20.5716 19.2515 20.5716 19.1512 20.5634C19.0338 20.5538 18.8608 20.5289 18.6786 20.436C18.4448 20.3169 18.2546 20.1268 18.1355 19.8929C18.0426 19.7107 18.0177 19.5377 18.0081 19.4204C17.9999 19.32 18 19.2068 18 19.1158L18 19.0972V18.8572H6V19.0972L6.00001 19.1158V19.1159C6.00005 19.2069 6.0001 19.32 5.9919 19.4204C5.98232 19.5377 5.95739 19.7107 5.86454 19.8929C5.74538 20.1268 5.55525 20.3169 5.32139 20.436C5.13916 20.5289 4.96618 20.5538 4.84885 20.5634C4.74849 20.5716 4.63534 20.5716 4.54432 20.5715L4.52572 20.5715H4.04572L4.02711 20.5715C3.93609 20.5716 3.82294 20.5716 3.72258 20.5634C3.60526 20.5538 3.43227 20.5289 3.25004 20.436C3.01618 20.3169 2.82605 20.1268 2.70689 19.8929C2.61405 19.7107 2.58912 19.5377 2.57953 19.4204C2.57133 19.32 2.57138 19.2068 2.57143 19.1158L2.57143 19.0972V17.4416L2.57143 17.4015L2.57143 17.3829V16.1007L2.5714 15.9739L2.5714 12.1543C1.86004 12.0127 1.28571 11.3885 1.28571 10.589V10.2858C1.28571 9.81241 1.66946 9.42865 2.14285 9.42865H3.32737L4.14567 7.79204L4.21109 7.66111L4.2111 7.66111C4.69764 6.68702 5.03377 6.01407 5.54872 5.50971C6.00255 5.06521 6.54953 4.72717 7.15007 4.52003C7.83147 4.285 8.58369 4.28531 9.67253 4.28575ZM4.30035 16.7176C4.28779 16.5638 4.28596 16.3635 4.28572 16.0536V14.5715H4.28568V12.0177C4.34686 12.029 4.42236 12.0421 4.51362 12.0565C4.78919 12.1001 5.20987 12.1558 5.81524 12.2108C7.02535 12.3208 8.98056 12.4286 12 12.4286C15.0194 12.4286 16.9746 12.3208 18.1847 12.2108C18.7901 12.1558 19.2108 12.1001 19.4863 12.0565C19.5776 12.0421 19.6531 12.0291 19.7143 12.0177V15.9429C19.7143 16.3171 19.7136 16.5462 19.6996 16.7176C19.6931 16.7974 19.6849 16.8457 19.678 16.8751C19.6747 16.889 19.6719 16.8976 19.6703 16.9023C19.6687 16.9067 19.6677 16.9086 19.6675 16.9089C19.6265 16.9896 19.5609 17.0551 19.4803 17.0962C19.48 17.0964 19.4789 17.0969 19.4764 17.0979L19.4736 17.0989C19.4689 17.1006 19.4604 17.1034 19.4464 17.1066C19.4171 17.1135 19.3688 17.1217 19.2889 17.1283C19.1175 17.1423 18.8884 17.1429 18.5143 17.1429H5.48568C5.11151 17.1429 4.88242 17.1423 4.71103 17.1283C4.63118 17.1217 4.58288 17.1135 4.55354 17.1066C4.53958 17.1034 4.531 17.1006 4.52636 17.0989C4.5219 17.0974 4.52003 17.0964 4.51969 17.0962C4.43905 17.0551 4.37348 16.9896 4.33239 16.9089C4.33222 16.9086 4.33127 16.9067 4.32968 16.9023C4.32802 16.8976 4.32526 16.889 4.32198 16.8751C4.31507 16.8457 4.30688 16.7974 4.30035 16.7176ZM19.2229 10.3626L18.321 8.55869C17.7428 7.40233 17.5351 7.01202 17.2517 6.73443C16.9794 6.46773 16.6512 6.2649 16.2909 6.14062C15.9159 6.01126 15.4739 6.00008 14.181 6.00008H9.8189C8.52605 6.00008 8.08408 6.01126 7.70904 6.14062C7.34872 6.2649 7.02054 6.46773 6.74824 6.73443C6.46482 7.01202 6.25716 7.40233 5.67898 8.55869L4.77702 10.3626C4.77834 10.3628 4.77966 10.363 4.78099 10.3632C5.01436 10.4001 5.39724 10.4515 5.97044 10.5036C7.11748 10.6079 9.01941 10.7144 12 10.7144C14.9806 10.7144 16.8825 10.6079 18.0295 10.5036C18.6027 10.4515 18.9856 10.4001 19.219 10.3632C19.2203 10.363 19.2216 10.3628 19.2229 10.3626ZM18.1063 15.422C18.576 15.3633 18.9092 14.9349 18.8505 14.4652C18.7918 13.9954 18.3634 13.6623 17.8937 13.721L16.1794 13.9353C15.7096 13.994 15.3765 14.4224 15.4352 14.8921C15.4939 15.3618 15.9223 15.695 16.392 15.6363L18.1063 15.422ZM5.14948 14.4652C5.09077 14.9349 5.42396 15.3633 5.89369 15.422L7.60798 15.6363C8.07771 15.695 8.5061 15.3618 8.56482 14.8921C8.62353 14.4224 8.29034 13.994 7.82061 13.9353L6.10632 13.721C5.63659 13.6623 5.2082 13.9954 5.14948 14.4652Z"
        fill={theme.icon}
      />
    </svg>
  );
});
