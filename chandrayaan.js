const moveForward = (position, direction) => {
  const [x, y, z] = position;

  if (direction === "N") return [x, y + 1, z];
  if (direction === "E") return [x + 1, y, z];
  if (direction === "U") return [x, y, z + 1];
  if (direction === "S") return [x, y - 1, z];
  if (direction === "W") return [x - 1, y, z];
  if (direction === "D") return [x, y, z - 1];
};

module.exports = moveForward;
