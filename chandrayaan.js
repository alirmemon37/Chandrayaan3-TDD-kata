const moveForward = (position, direction) => {
  if (direction === "N") return [0, 1, 0];
  if (direction === "E") return [1, 0, 0];
  if (direction === "U") return [0, 0, 1];
};

module.exports = moveForward;
