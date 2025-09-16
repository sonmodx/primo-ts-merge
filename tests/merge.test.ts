import { merge } from "../src/merge";

describe("merge function", () => {
  it("should merge three arrays correctly", () => {
    const col1 = [1, 3, 5];
    const col2 = [9, 7, 4]; // descending
    const col3 = [6, 8, 10];
    const result = merge(col1, col2, col3);
    expect(result).toEqual([1, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it("should handle empty arrays", () => {
    expect(merge([], [5, 4, 3], [])).toEqual([3, 4, 5]);
    expect(merge([1, 2], [], [3, 4])).toEqual([1, 2, 3, 4]);
    expect(merge([], [], [])).toEqual([]);
  });

  it("should handle duplicates", () => {
    const col1 = [1, 2, 2];
    const col2 = [5, 4, 2]; // descending
    const col3 = [2, 3];
    const result = merge(col1, col2, col3);
    expect(result).toEqual([1, 2, 2, 2, 2, 3, 4, 5]);
  });
});
