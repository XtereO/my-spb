import { memo } from "react";
import { Snackbar } from "@vkontakte/vkui";
import { FailedIcon, SuccessIcon } from "../icons";

type Props = {
  resultOperation: boolean;
  text: string;
  closeHandler?: () => void;
};

export const MySnackbar = memo<Props>(
  ({ text, resultOperation, closeHandler }) => {
    return (
      <Snackbar
        onClose={closeHandler ? closeHandler : () => {}}
        before={resultOperation ? <SuccessIcon /> : <FailedIcon />}
      >
        <div style={{ fontSize: 15 }}>{text}</div>
      </Snackbar>
    );
  }
);
