import { Snackbar } from "@vkontakte/vkui";
import { useContext } from "react";
import { SuccessIcon, WarningTriangleOutlineIcon } from "../icons";
import { ThemeContext } from "../utils";
import { TextSFProRoundedRegular } from "./Fonts";

type Props = {
  isSuccess: boolean;
  text: string;
  closeHandler?: () => void;
};

export const CustomizedSnackbar: React.FC<Props> = ({
  text,
  isSuccess,
  closeHandler,
}) => {
  const theme = useContext(ThemeContext);
  return (
    <Snackbar
      duration={3000}
      onClose={closeHandler ? closeHandler : () => {}}
      before={isSuccess ? <SuccessIcon /> : <WarningTriangleOutlineIcon />}
    >
      <TextSFProRoundedRegular>
        <div style={{ fontSize: 15, color: theme.heading }}>{text}</div>
      </TextSFProRoundedRegular>
    </Snackbar>
  );
};
