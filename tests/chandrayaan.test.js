const { execute } = require("../chandrayaan");
const { getChandrayaan } = require("../lib/index");

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
      expect(
        execute([...movement], getChandrayaan([0, 0, 0], direction))
      ).toEqual(getChandrayaan(expected, direction));
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
      expect(
        execute([...turn], getChandrayaan([0, 0, 0], direction, facing))
      ).toEqual(getChandrayaan([0, 0, 0], expectDirection, expectFacing));
    }
  );

  // other configurations are not shown but accounted in turnMappings
  it.each`
    direction | facing | command | expectDirection | expectFacing
    ${"N"}    | ${"U"} | ${"u"}  | ${"U"}          | ${"S"}
    ${"N"}    | ${"U"} | ${"d"}  | ${"D"}          | ${"N"}
    ${"N"}    | ${"U"} | ${"l"}  | ${"W"}          | ${"U"}
    ${"N"}    | ${"U"} | ${"r"}  | ${"E"}          | ${"U"}
    ${"N"}    | ${"D"} | ${"u"}  | ${"D"}          | ${"S"}
    ${"N"}    | ${"D"} | ${"d"}  | ${"U"}          | ${"N"}
    ${"N"}    | ${"D"} | ${"l"}  | ${"E"}          | ${"D"}
    ${"N"}    | ${"D"} | ${"r"}  | ${"W"}          | ${"D"}
    ${"N"}    | ${"W"} | ${"u"}  | ${"W"}          | ${"S"}
    ${"N"}    | ${"W"} | ${"d"}  | ${"E"}          | ${"N"}
    ${"N"}    | ${"W"} | ${"l"}  | ${"D"}          | ${"W"}
    ${"N"}    | ${"W"} | ${"r"}  | ${"U"}          | ${"W"}
    ${"N"}    | ${"E"} | ${"u"}  | ${"E"}          | ${"S"}
    ${"N"}    | ${"E"} | ${"d"}  | ${"W"}          | ${"N"}
    ${"N"}    | ${"E"} | ${"l"}  | ${"U"}          | ${"E"}
    ${"N"}    | ${"E"} | ${"r"}  | ${"D"}          | ${"E"}
  `(
    "when direction is $direction and facing $facing then on $command, direction is $expectDirection and facing $expectFacing",
    ({ direction, facing, command, expectDirection, expectFacing }) => {
      expect(
        execute([...command], getChandrayaan([0, 0, 0], direction, facing))
      ).toEqual(getChandrayaan([0, 0, 0], expectDirection, expectFacing));
    }
  );

  it("when executing multiple commands", () => {
    const facing = "U";
    expect(
      execute(["f", "f", "f"], getChandrayaan([0, 0, 0], "N", facing))
    ).toEqual(getChandrayaan([0, 3, 0], "N", facing));
  });

  it("when executing multiple commands", () => {
    const facing = "U";
    expect(
      execute(["u", "r", "l"], getChandrayaan([0, 0, 0], "N", facing))
    ).toEqual(getChandrayaan([0, 0, 0], "U", "S"));
  });

  /*
    NOTE: the answer does not require the final facing direction
    it only requires the final position and direction
    we maintain the facing direction for correctly determining the final position 
  */
  it("when executing multiple commands", () => {
    const { position, direction } = execute(
      ["f", "r", "u", "b", "l"],
      getChandrayaan([0, 0, 0], "N", "U")
    );

    expect({ position, direction }).toEqual({
      position: [0, 1, -1],
      direction: "N",
    });
  });
});
