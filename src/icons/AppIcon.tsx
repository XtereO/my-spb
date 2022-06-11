import { memo } from "react";
import { useSelector } from "react-redux";
import { getTheme } from "../bll/main";

export const AppIcon = memo(() => {
  const theme = useSelector(getTheme);
  if (theme === "light") {
    return (
      <svg
        width="197"
        height="196"
        viewBox="0 0 197 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 49.4579C0.5 22.1431 22.6431 0 49.9579 0H147.042C174.357 0 196.5 22.1431 196.5 49.4579V146.542C196.5 173.857 174.357 196 147.042 196H49.9579C22.6431 196 0.5 173.857 0.5 146.542V49.4579Z"
          fill="url(#paint0_linear_3_5455)"
        />
        <path
          d="M98.5 10.5327V35.8723M95.7523 32.6667L101.553 25.6449M95.7523 21.0654L101.553 14.0436"
          stroke="url(#paint1_linear_3_5455)"
          strokeWidth="2.44237"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M145.21 101.511H140.936L133.914 96.9315L126.282 99.9844L116.207 93.2679L106.132 96.9315L96.6682 92.6573L86.5935 97.8473L76.824 95.0997L67.3598 101.511L61.2539 98.4579L56.0639 101.511H51.7897L48.1262 108.533V115.249L50.5685 116.165V121.66L46.2944 127.156V137.231L48.1262 138.757V172.645C48.1262 179.727 53.867 185.467 60.9486 185.467H136.051C143.133 185.467 148.874 179.727 148.874 172.645V138.757L150.706 137.231V127.156L146.431 121.66V116.165L148.874 115.249V108.533L145.21 101.511Z"
          fill="url(#paint2_linear_3_5455)"
        />
        <path
          d="M136.051 157.38V135.704L129.945 133.872V155.548L136.051 157.38Z"
          fill="url(#paint3_linear_3_5455)"
        />
        <path
          d="M112.238 131.125L121.092 132.651V155.548L112.238 154.022V131.125Z"
          fill="url(#paint4_linear_3_5455)"
        />
        <path
          d="M60.338 157.38V135.704L66.4439 133.872V155.548L60.338 157.38Z"
          fill="url(#paint5_linear_3_5455)"
        />
        <path
          d="M84.1511 131.125L75.2975 132.651V155.548L84.1511 154.022V131.125Z"
          fill="url(#paint6_linear_3_5455)"
        />
        <path
          d="M103.385 130.514H94.8364V154.022H103.385V130.514Z"
          fill="url(#paint7_linear_3_5455)"
        />
        <path
          d="M56.0639 101.511C61.4394 92.1444 68.9662 75.0858 84.9048 68.6477C84.2942 67.804 84.1511 64.448 89.0358 60.2959C88.1199 58.6677 87.143 55.2891 90.5623 54.8006C90.8676 54.19 91.1118 52.8467 89.6464 52.3582C87.9743 51.8009 88.5918 46.6641 95.447 45.7732C96.1014 45.6881 96.8126 45.6417 97.5841 45.6417C98.3556 45.6417 99.0668 45.6881 99.7212 45.7732C106.576 46.6641 107.194 51.8009 105.522 52.3582C104.056 52.8467 104.301 54.19 104.606 54.8006C108.025 55.2891 107.048 58.6677 106.132 60.2959C111.017 64.448 111.017 67.1733 110.407 68.017C127.509 73.8935 135.374 91.8196 140.936 101.511L133.914 96.9315L126.282 99.9844L116.207 93.2679L106.132 96.9315L96.6682 92.6573L86.5935 97.8474L76.824 95.0997L67.3598 101.511L61.2539 98.4579L56.0639 101.511Z"
          fill="url(#paint8_linear_3_5455)"
        />
        <path
          d="M98.2339 45.6417C99.0054 45.6417 99.7166 45.6881 100.371 45.7732C99.8622 45.1188 99.6168 44.0344 101.897 42.8941C103.729 41.9782 104.34 34.6511 98.2339 34.6511C92.128 34.6511 92.7386 41.9782 94.5704 42.8941C96.8511 44.0344 96.6057 45.1188 96.0968 45.7732C96.7512 45.6881 97.4624 45.6417 98.2339 45.6417Z"
          fill="url(#paint9_linear_3_5455)"
        />
        <rect
          opacity="0.5"
          x="0.5"
          width="196"
          height="196"
          fill="url(#pattern0)"
          fillOpacity="0.04"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0_3_5455"
              transform="translate(-0.0540166) scale(0.00138504)"
            />
          </pattern>
          <linearGradient
            id="paint0_linear_3_5455"
            x1="0.5"
            y1="0"
            x2="196.5"
            y2="196"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C2CBDA" />
            <stop offset="1" stopColor="#D5D5D7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_3_5455"
            x1="98.5"
            y1="10.5327"
            x2="98.5"
            y2="35.8723"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F3E6CD" />
            <stop offset="1" stopColor="#F6DDB0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_3_5455"
            x1="98.5"
            y1="92.6573"
            x2="98.5"
            y2="185.467"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F7E2CC" />
            <stop offset="0.755208" stopColor="#F3CA97" />
            <stop offset="1" stopColor="#D3D4D8" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_3_5455"
            x1="98.1947"
            y1="130.514"
            x2="98.1947"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_3_5455"
            x1="98.1947"
            y1="130.514"
            x2="98.1947"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_3_5455"
            x1="98.1947"
            y1="130.514"
            x2="98.1947"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_3_5455"
            x1="98.1947"
            y1="130.514"
            x2="98.1947"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_3_5455"
            x1="98.1947"
            y1="130.514"
            x2="98.1947"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_3_5455"
            x1="98.8053"
            y1="101.816"
            x2="98.8053"
            y2="45.6417"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#759294" />
            <stop offset="1" stopColor="#9BB5B0" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_3_5455"
            x1="98.2339"
            y1="34.6511"
            x2="98.2339"
            y2="45.7732"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6DEB2" />
            <stop offset="1" stopColor="#E6B24D" />
          </linearGradient>
        </defs>
      </svg>
    );
  } else {
    return (
      <svg
        width="197"
        height="196"
        viewBox="0 0 197 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0.5 81C0.5 36.2649 36.7649 0 81.5 0H115.5C160.235 0 196.5 36.2649 196.5 81V115C196.5 159.735 160.235 196 115.5 196H81.5C36.7649 196 0.5 159.735 0.5 115V81Z"
          fill="url(#paint0_linear_82_421)"
        />
        <path
          d="M98.5001 10.5327V35.8723M95.7524 32.6667L101.553 25.6449M95.7524 21.0654L101.553 14.0436"
          stroke="url(#paint1_linear_82_421)"
          strokeWidth="2.44237"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M145.21 101.511H140.936L133.914 96.9315L126.282 99.9844L116.207 93.2679L106.132 96.9315L96.6683 92.6573L86.5935 97.8473L76.824 95.0997L67.3599 101.511L61.2539 98.4579L56.0639 101.511H51.7898L48.1262 108.533V115.249L50.5686 116.165V121.66L46.2944 127.156V137.231L48.1262 138.757V172.645C48.1262 179.727 53.867 185.467 60.9486 185.467H136.051C143.133 185.467 148.874 179.727 148.874 172.645V138.757L150.706 137.231V127.156L146.432 121.66V116.165L148.874 115.249V108.533L145.21 101.511Z"
          fill="url(#paint2_linear_82_421)"
        />
        <path
          d="M136.051 157.38V135.704L129.945 133.872V155.548L136.051 157.38Z"
          fill="url(#paint3_linear_82_421)"
        />
        <path
          d="M112.238 131.125L121.092 132.651V155.548L112.238 154.022V131.125Z"
          fill="url(#paint4_linear_82_421)"
        />
        <path
          d="M60.3379 157.38V135.704L66.4438 133.872V155.548L60.3379 157.38Z"
          fill="url(#paint5_linear_82_421)"
        />
        <path
          d="M84.151 131.125L75.2974 132.651V155.548L84.151 154.022V131.125Z"
          fill="url(#paint6_linear_82_421)"
        />
        <path
          d="M103.385 130.514H94.8363V154.022H103.385V130.514Z"
          fill="url(#paint7_linear_82_421)"
        />
        <path
          d="M56.0639 101.511C61.4395 92.1444 68.9663 75.0858 84.9049 68.6477C84.2943 67.804 84.1512 64.448 89.0359 60.2959C88.12 58.6677 87.1431 55.2891 90.5624 54.8006C90.8677 54.19 91.1119 52.8467 89.6465 52.3582C87.9743 51.8009 88.5918 46.6641 95.4471 45.7732C96.1015 45.6881 96.8127 45.6417 97.5842 45.6417C98.3557 45.6417 99.0669 45.6881 99.7213 45.7732C106.577 46.6641 107.194 51.8009 105.522 52.3582C104.056 52.8467 104.301 54.19 104.606 54.8006C108.025 55.2891 107.048 58.6677 106.132 60.2959C111.017 64.448 111.017 67.1733 110.407 68.017C127.509 73.8935 135.374 91.8196 140.936 101.511L133.914 96.9315L126.282 99.9844L116.207 93.2679L106.132 96.9315L96.6683 92.6573L86.5935 97.8474L76.8241 95.0997L67.3599 101.511L61.254 98.4579L56.0639 101.511Z"
          fill="url(#paint8_linear_82_421)"
        />
        <path
          d="M98.234 45.6417C99.0055 45.6417 99.7167 45.6881 100.371 45.7732C99.8622 45.1188 99.6168 44.0344 101.898 42.8941C103.729 41.9782 104.34 34.6511 98.234 34.6511C92.1281 34.6511 92.7387 41.9782 94.5705 42.8941C96.8512 44.0344 96.6058 45.1188 96.0969 45.7732C96.7513 45.6881 97.4625 45.6417 98.234 45.6417Z"
          fill="url(#paint9_linear_82_421)"
        />
        <rect
          opacity="0.5"
          x="0.5"
          width="196"
          height="196"
          fill="url(#pattern0)"
          fillOpacity="0.04"
        />
        <defs>
          <pattern
            id="pattern0"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use
              href="#image0_82_421"
              transform="translate(-0.0540166) scale(0.00138504)"
            />
          </pattern>
          <linearGradient
            id="paint0_linear_82_421"
            x1="0.5"
            y1="0"
            x2="196.5"
            y2="196"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#C2CBDA" />
            <stop offset="1" stopColor="#D5D5D7" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_82_421"
            x1="98.5001"
            y1="10.5327"
            x2="98.5001"
            y2="35.8723"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F3E6CD" />
            <stop offset="1" stopColor="#F6DDB0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_82_421"
            x1="98.5"
            y1="92.6573"
            x2="98.5"
            y2="185.467"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F7E2CC" />
            <stop offset="0.755208" stopColor="#F3CA97" />
            <stop offset="1" stopColor="#D3D4D8" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint3_linear_82_421"
            x1="98.1946"
            y1="130.514"
            x2="98.1946"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint4_linear_82_421"
            x1="98.1946"
            y1="130.514"
            x2="98.1946"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint5_linear_82_421"
            x1="98.1946"
            y1="130.514"
            x2="98.1946"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint6_linear_82_421"
            x1="98.1946"
            y1="130.514"
            x2="98.1946"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint7_linear_82_421"
            x1="98.1946"
            y1="130.514"
            x2="98.1946"
            y2="157.38"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#8B979F" />
            <stop offset="1" stopColor="#5D6E76" stopOpacity="0.5" />
          </linearGradient>
          <linearGradient
            id="paint8_linear_82_421"
            x1="98.8054"
            y1="101.816"
            x2="98.8054"
            y2="45.6417"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#759294" />
            <stop offset="1" stopColor="#9BB5B0" />
          </linearGradient>
          <linearGradient
            id="paint9_linear_82_421"
            x1="98.234"
            y1="34.6511"
            x2="98.234"
            y2="45.7732"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#F6DEB2" />
            <stop offset="1" stopColor="#E6B24D" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
});
