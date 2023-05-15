import { hexCodesArray } from "../data/hexCodesArray";
import { colourPicker, hashUsername } from "./colourPicker";

describe("given a username, colourPicker returns a colour from an array of hex codes", () => {
  it("should return the same value given the same input", () => {
    expect(colourPicker("Name") === colourPicker("Name")).toBe(true);
    expect(colourPicker("Didier") === colourPicker("Didier")).toBe(true);
  });
  it("should throw an error if an empty string or undefined variable is passed in", () => {
    expect(() => {
      colourPicker("");
    }).toThrowError();
  });
});

describe("given a username, hashUsername returns an index within the range of the hexCodesArray", () => {
  it("should return the same value given the same input", () => {
    expect(hashUsername("Name") === hashUsername("Name")).toBe(true);
    expect(hashUsername("Didier") === hashUsername("Didier")).toBe(true);
  });

  const usernames = [
    ["Apple123", 0],
    ["BigJohn", 0],
    ["1bnsdfskahgjfdsf&adskfasdkhj*", 0],
  ];

  test.each(usernames)(
    "should return a value in the range of hexCodesArray",
    (hashedUsername, nil) => {
      expect(hashUsername(hashedUsername as string)).toBeGreaterThanOrEqual(0);
      expect(hashUsername(hashedUsername as string)).toBeLessThan(
        hexCodesArray.length
      );
    }
  );
});
