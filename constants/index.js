const moveDirectionMappings = {
  N: { f: [0, 1, 0], b: [0, -1, 0] },
  E: { f: [1, 0, 0], b: [-1, 0, 0] },
  U: { f: [0, 0, 1], b: [0, 0, -1] },
  S: { f: [0, -1, 0], b: [0, 1, 0] },
  W: { f: [-1, 0, 0], b: [1, 0, 0] },
  D: { f: [0, 0, -1], b: [0, 0, 1] },
};

const turnMappings = {
  N: {
    U: { l: "W", r: "E" },
    D: { l: "E", r: "W" },
    W: { l: "D", r: "U" },
    E: { l: "U", r: "D" },
  },
  E: {
    U: { l: "N", r: "S" },
    D: { l: "S", r: "N" },
    N: { l: "U", r: "D" },
    S: { l: "D", r: "U" },
  },
  S: {
    U: { l: "E", r: "W" },
    D: { l: "W", r: "E" },
    W: { l: "U", r: "D" },
    E: { l: "D", r: "U" },
  },
  W: {
    U: { l: "S", r: "N" },
    D: { l: "N", r: "S" },
    N: { l: "D", r: "U" },
    S: { l: "U", r: "D" },
  },
  U: {
    N: { l: "W", r: "E" },
    S: { l: "E", r: "W" },
    W: { l: "N", r: "S" },
    E: { l: "S", r: "N" },
  },
  D: {
    N: { l: "E", r: "W" },
    S: { l: "W", r: "E" },
    W: { l: "S", r: "N" },
    E: { l: "N", r: "S" },
  },
};

const oppositeMapping = {
  U: "D",
  D: "U",
  N: "S",
  S: "N",
  E: "W",
  W: "E",
};

module.exports = { moveDirectionMappings, turnMappings, oppositeMapping };
