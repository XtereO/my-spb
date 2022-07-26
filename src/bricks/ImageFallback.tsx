import { Spinner } from "@vkontakte/vkui";
import { forwardRef, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { getPhotoUrl } from "../dal/api";
import defaultImage from "../images/default-image.jpg";

type Props = {
  id: string;
  onClick?: () => void;
  spinnerSize?: "large";
  style?: object;
  imageUrl: string;
  className?: string;
};

export const ImageFallback = forwardRef(
  ({ id, onClick, style, imageUrl, spinnerSize, className }: Props, imgRef) => {
    const { inView, ref } = useInView();
    const [photoSrc, setPhotoSrc] = useState("");
    useEffect(() => {
      setPhotoSrc("");
    }, [imageUrl]);
    useEffect(() => {
      if (inView && !photoSrc) {
        getPhotoUrl(imageUrl)
          .then((res) => setPhotoSrc(res.preview ?? defaultImage))
          .catch(() => setPhotoSrc(defaultImage));
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
        //@ts-ignore
        ref={imgRef}
        onClick={onClick}
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
