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

const turnLeft = (direction, facing) => {
  const newDirection = {
    N: { U: "W", D: "E" },
    E: { U: "N", D: "S" },
    S: { U: "E", D: "W" },
    W: { U: "S", D: "N" },
  }[direction][facing];

  const newFacing = facing;

  return { newDirection, newFacing };
};

module.exports = { move, turnLeft };
