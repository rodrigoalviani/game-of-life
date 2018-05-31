describe("Game of life", function() {
  var gol;
  var starting_cells = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
  ];

  beforeEach(function() {
    gol = new GameOfLife(3,3);
    gol.fill();
  });

  describe("generate empty and get cells", function() {

    it("creates the grid of 5 rows and 5 coluns -> 25", function() {
        expect(gol.getSize()).toBe(9);
    });

    it("it fills the grid empty with cells", function() {
        expect(gol.getCells()).toEqual(starting_cells);
    });

    it("check if a cell in a given position is dead", function() {
        expect(expect(gol.getCellAt(1,1)).toEqual(0));
    });
  });

  describe("populate and find neighboors", function() {
    it("populates cells", function() {
      expect(gol.populate()).not.toEqual(starting_cells);
    });

    it("get neighboors on first position", function() {
      expect(gol.getNeighbours(0,0)).toEqual([[0,1], [1,0], [1,1]]);
    });

    it("get neighboors in another position", function() {
        expect(gol.getNeighbours(0,1)).toEqual([[0,0], [0,2], [1,1], [1,2], [1,0]]);
    });

    it("get neighboors in a more intern position", function() {
        expect(gol.getNeighbours(1,1)).toEqual([[1,0], [1,2], [0,1], [2,1], [0,0], [2,2], [2,0], [0,2]]);
    });

  });

});