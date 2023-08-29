const moveDirectionMappings = {
  N: { f: [0, 1, 0], b: [0, -1, 0] },
  E: { f: [1, 0, 0], b: [-1, 0, 0] },
  U: { f: [0, 0, 1], b: [0, 0, -1] },
  S: { f: [0, -1, 0], b: [0, 1, 0] },
  W: { f: [-1, 0, 0], b: [1, 0, 0] },
  D: { f: [0, 0, -1], b: [0, 0, 1] }
}

module.exports = moveDirectionMappings;