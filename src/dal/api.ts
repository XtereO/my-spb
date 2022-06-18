import axios from "axios";

export const getPhotoUrl = async (path_to_photo: string) => {
  return (
    await axios.get<{ _embedded: { items:{preview: string}[] } }>(
      `https://cloud-api.yandex.net/v1/disk/public/resources?public_key=${path_to_photo}&preview_size=XL`
    )
  ).data._embedded.items[0];
};
