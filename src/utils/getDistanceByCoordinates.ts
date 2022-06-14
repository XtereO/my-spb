type Points = {
  point1: {
    latitude: number;
    longitude: number;
  };
  point2: {
    latitude: number;
    longitude: number;
  };
};

export const getDistance = ({ point1, point2 }: Points): number => {
  const R = 6371; // km
  const dLat = toRad(point2.latitude - point1.longitude);
  const dLon = toRad(point2.longitude - point1.longitude);
  const lat1 = toRad(point1.latitude);
  const lat2 = toRad(point2.latitude);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

const toRad = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};
