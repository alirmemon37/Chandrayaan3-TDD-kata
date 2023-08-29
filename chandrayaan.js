const moveDirectionMappings = require("./constants");

const move = (position, direction, movement) => {
  const [x, y, z] = position;

  const coordinateChange = moveDirectionMappings[direction][movement];
  const newPosition = [
    x + coordinateChange[0],
    y + coordinateChange[1],
    z + coordinateChange[2],
  ];

  return newPosition;
};

module.exports = { move };
