type Point = [number, number];

export const getDistance = (
  [lat1, lon1]: Point,
  [lat2, lon2]: Point
): number => {
  const R = 6371; // km
  const dLat = Math.abs(toRad(lat2 - lat1));
  const dLon = Math.abs(toRad(lon2 - lon1));
  const latRad1 = toRad(lat1);
  const latRad2 = toRad(lat2);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) *
      Math.sin(dLon / 2) *
      Math.cos(latRad1) *
      Math.cos(latRad2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c;
  return d;
};

const toRad = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};
