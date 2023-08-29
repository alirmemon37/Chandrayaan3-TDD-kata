const { moveDirectionMappings, turnMappings } = require("./constants");

const getNextPosition = (position, direction, movement) => {
  const [x, y, z] = position;

  const coordinateChange = moveDirectionMappings[direction][movement];
  const newPosition = [
    x + coordinateChange[0],
    y + coordinateChange[1],
    z + coordinateChange[2],
  ];

  return newPosition;
};

const move = (chandrayaan, movement) => {
  return {
    ...chandrayaan,
    position: getNextPosition(
      chandrayaan.position,
      chandrayaan.direction,
      movement
    ),
  };
};

const turn = (chandrayaan, turnDirection) => {
  const newDirection =
    turnMappings[chandrayaan.direction][chandrayaan.facing][turnDirection];

  return { ...chandrayaan, direction: newDirection };
};

const execute = (command, state) => {
  if (command === "f" || command === "b") {
    return move(state, command);
  }

  if (command === "l" || command === "r") {
    return turn(state, command);
  }
};

module.exports = { execute };
