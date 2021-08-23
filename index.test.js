const treemaker = require("./treemaker");
const Tree = treemaker.Tree;

// Tests
describe("tests treeNumbers()", () => {
  it("runs with 2", () => {
    const leaves = new Tree();
    leaves.insert(08);
    leaves.insert(17);
    expect(leaves.root).not.toBe(null);
    expect(leaves.root.value).toBe(08);
    expect(leaves.root.left).not.toBe(null);
    expect(leaves.root.left.value).toBe(17);
  });
  it("runs with 3", () => {
    const leaves = new Tree();
    leaves.insert(153);
    leaves.insert(352);
    leaves.insert(531);
    expect(leaves.root).not.toBe(null);
    expect(leaves.root.value).toBe(153);
    expect(leaves.root.left).not.toBe(null);
    expect(leaves.root.left.value).toBe(352);
    expect(leaves.root.left.left).not.toBe(null);
    expect(leaves.root.left.left.value).toBe(531);
  });
  it("runs with 5 in a random order", () => {
    const leaves = new Tree();
    leaves.insert(1977);
    leaves.insert(1983);
    leaves.insert(1956);
    leaves.insert(1974);
    leaves.insert(1923);
    expect(leaves.root).not.toBe(null);
    expect(leaves.root.value).toBe(1977);
    expect(leaves.root.left).not.toBe(null);
    expect(leaves.root.left.value).toBe(1956);
    expect(leaves.root.left.right).not.toBe(null);
    expect(leaves.root.left.right.value).toBe(1974);
    expect(leaves.root.right).not.toBe(null);
    expect(leaves.root.right.value).toBe(1983);
    expect(leaves.root.right.right).not.toBe(null);
    expect(leaves.root.right.right.value).toBe(1923);
  });
});
