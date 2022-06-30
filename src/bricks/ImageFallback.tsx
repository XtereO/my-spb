import { memo, useEffect, useState } from "react";

import defaultImage from "../icons/default-image.jpg";

type Props = {
  id: string;
  style?: object;
  imageUrl: string;
  className?: string;
};

export const ImageFallback = memo<Props>(
  ({ id, style, imageUrl, className }) => {
    const [isLoading, setLoading] = useState(true);
    const [isValid, setIsValid] = useState<null | boolean>(null);

    useEffect(() => {
      fetch(imageUrl).then((res) => {
        setIsValid(res.status === 200);
        setLoading(false);
      });
    }, [imageUrl]);

    if (isLoading || !isValid) {
      return <img id={id} className={className} style={style} />;
    }
    return <img id={id} src={imageUrl} className={className} style={style} />;
  }
);
