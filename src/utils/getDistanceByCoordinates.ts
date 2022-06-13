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
  var R = 6371; // km
  var dLat = toRad(point2.latitude - point1.longitude);
  var dLon = toRad(point2.longitude - point1.longitude);
  var lat1 = toRad(point1.latitude);
  var lat2 = toRad(point2.latitude);

  var a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};

const toRad = (degrees: number): number => {
  return (degrees * Math.PI) / 180;
};
