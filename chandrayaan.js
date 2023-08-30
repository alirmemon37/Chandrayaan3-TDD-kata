const {
  moveDirectionMappings,
  turnMappings,
  oppositeMapping,
} = require("./constants");

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

  return {
    ...chandrayaan,
    direction: newDirection,
    facing: chandrayaan.facing,
  };
};

const apply = (command, state) => {
  if (command === "f" || command === "b") {
    return move(state, command);
  }

  if (command === "l" || command === "r") {
    return turn(state, command);
  }

  // logic of u and d commands is derived from observation of
  // movement of chandrayaan in 3-d space
  if (command === "u") {
    const newDirection = state.facing;
    const newFacing = oppositeMapping[state.direction];

    return { ...state, direction: newDirection, facing: newFacing };
  }

  if (command === "d") {
    const newDirection = oppositeMapping[state.facing];
    const newFacing = state.direction;

    return { ...state, direction: newDirection, facing: newFacing };
  }
};

const execute = (commands, state) => {
  // commands is an array of commands e.g. ['f', 'b', 'l', 'r', 'u', 'd']

  // inital state
  let result = state;

  for (const cmd of commands) {
    // sent the updated state to the next command
    result = apply(cmd, result);
  }
  return result;
}

module.exports = { execute };
