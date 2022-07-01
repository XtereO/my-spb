import { Spinner } from "@vkontakte/vkui";
import { memo, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getPhotoUrl } from "../dal/api";

import defaultImage from "../icons/default-image.jpg";

type Props = {
  id: string;
  spinnerSize?: "large";
  style?: object;
  imageUrl: string;
  className?: string;
};

export const ImageFallback = memo<Props>(
  ({ id, style, imageUrl, spinnerSize, className }) => {
    const { inView, ref } = useInView();
    const [photoSrc, setPhotoSrc] = useState("");
    useEffect(() => {
      setPhotoSrc("");
    }, [imageUrl]);
    useEffect(() => {
      if (inView && !photoSrc) {
        getPhotoUrl(imageUrl)
          .then((res) => setPhotoSrc(res.preview ?? defaultImage))
          .catch((err) => setPhotoSrc(defaultImage));
      }
    }, [inView, ref]);
    if (!photoSrc) {
      return (
        <div className={className} style={style} id={id} ref={ref}>
          <Spinner size={spinnerSize ?? "large"} />
        </div>
      );
    }
    return (
      <img
        referrerPolicy="no-referrer"
        onError={() => setPhotoSrc(defaultImage)}
        id={id}
        src={photoSrc}
        className={className}
        style={style}
      />
    );
  }
);
