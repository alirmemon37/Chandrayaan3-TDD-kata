const moveDirectionMappings = {
  N: { f: [0, 1, 0], b: [0, -1, 0] },
  E: { f: [1, 0, 0], b: [-1, 0, 0] },
  U: { f: [0, 0, 1], b: [0, 0, -1] },
  S: { f: [0, -1, 0], b: [0, 1, 0] },
  W: { f: [-1, 0, 0], b: [1, 0, 0] },
  D: { f: [0, 0, -1], b: [0, 0, 1] },
};

const turnMappings = {
  N: { U: { l: "W", r: "E" }, D: { l: "E", r: "W" } },
  E: { U: { l: "N", r: "S" }, D: { l: "S", r: "N" } },
  S: { U: { l: "E", r: "W" }, D: { l: "W", r: "E" } },
  W: { U: { l: "S", r: "N" }, D: { l: "N", r: "S" } },
};

module.exports = { moveDirectionMappings, turnMappings };
