let isArray = Array.isArray || function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };

const turfPoint = (coordinates:any, properties:any={}) => {
    if (!isArray(coordinates)) throw new Error('Coordinates must be an array');
    if (coordinates.length < 2) throw new Error('Coordinates must be at least 2 numbers long');
    return {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: coordinates
      },
      properties: properties || {}
    };
  };
export default turfPoint;