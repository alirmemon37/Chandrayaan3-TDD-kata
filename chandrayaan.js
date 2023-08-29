const moveForward = (position, direction) => {
  const [x, y, z] = position;

  if (direction === "N") return [x, y + 1, z];
  if (direction === "E") return [x + 1, y, z];
  if (direction === "U") return [x, y, z + 1];
};

module.exports = moveForward;
