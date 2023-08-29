const { execute } = require("../chandrayaan");

const chandrayaan = (position, direction, facing) => ({
  position: position,
  direction,
  facing,
});

describe("Chandrayaan 3 should", () => {
  it.each`
    direction | movement | expected
    ${"N"}    | ${"f"}   | ${[0, 1, 0]}
    ${"E"}    | ${"f"}   | ${[1, 0, 0]}
    ${"U"}    | ${"f"}   | ${[0, 0, 1]}
    ${"S"}    | ${"f"}   | ${[0, -1, 0]}
    ${"W"}    | ${"f"}   | ${[-1, 0, 0]}
    ${"D"}    | ${"f"}   | ${[0, 0, -1]}
    ${"N"}    | ${"b"}   | ${[0, -1, 0]}
    ${"E"}    | ${"b"}   | ${[-1, 0, 0]}
    ${"U"}    | ${"b"}   | ${[0, 0, -1]}
    ${"S"}    | ${"b"}   | ${[0, 1, 0]}
    ${"W"}    | ${"b"}   | ${[1, 0, 0]}
    ${"D"}    | ${"b"}   | ${[0, 0, 1]}
  `(
    "when facing $direction moving $movement by 1 should change the position correctly",
    ({ direction, movement, expected }) => {
      expect(execute(movement, chandrayaan([0, 0, 0], direction))).toEqual(
        chandrayaan(expected, direction)
      );
    }
  );

  it.each`
    direction | facing | turn   | expectDirection | expectFacing
    ${"N"}    | ${"U"} | ${"l"} | ${"W"}          | ${"U"}
    ${"E"}    | ${"U"} | ${"l"} | ${"N"}          | ${"U"}
    ${"S"}    | ${"U"} | ${"l"} | ${"E"}          | ${"U"}
    ${"W"}    | ${"U"} | ${"l"} | ${"S"}          | ${"U"}
    ${"N"}    | ${"D"} | ${"l"} | ${"E"}          | ${"D"}
    ${"E"}    | ${"D"} | ${"l"} | ${"S"}          | ${"D"}
    ${"S"}    | ${"D"} | ${"l"} | ${"W"}          | ${"D"}
    ${"W"}    | ${"D"} | ${"l"} | ${"N"}          | ${"D"}
    ${"N"}    | ${"U"} | ${"r"} | ${"E"}          | ${"U"}
    ${"E"}    | ${"U"} | ${"r"} | ${"S"}          | ${"U"}
    ${"S"}    | ${"U"} | ${"r"} | ${"W"}          | ${"U"}
    ${"W"}    | ${"U"} | ${"r"} | ${"N"}          | ${"U"}
    ${"N"}    | ${"D"} | ${"r"} | ${"W"}          | ${"D"}
    ${"E"}    | ${"D"} | ${"r"} | ${"N"}          | ${"D"}
    ${"S"}    | ${"D"} | ${"r"} | ${"E"}          | ${"D"}
    ${"W"}    | ${"D"} | ${"r"} | ${"S"}          | ${"D"}
  `(
    "when direction is $direction and facing $facing then on turning $turn, direction is $expectDirection and facing $expectFacing",
    ({ direction, facing, turn, expectDirection, expectFacing }) => {
      // tracking two directions on of horizontal plane and other for galactic plane
      expect(execute(turn, chandrayaan([0, 0, 0], direction, facing))).toEqual(
        chandrayaan([0, 0, 0], expectDirection, expectFacing)
      );
    }
  );
});
