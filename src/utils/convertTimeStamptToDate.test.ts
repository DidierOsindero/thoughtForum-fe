import { convertTimeStampToDate } from "./convertTimeStampToDate";

describe("Convert a time stamp to a date", () => {
  it("slices input string up to index of 'T'", () => {
    expect(convertTimeStampToDate("aT")).toStrictEqual("a");
  });
  it("removes hours, minutes and seconds from a timestamp", () => {
    expect(convertTimeStampToDate("2023-01-05T17:54:49.941Z")).toStrictEqual(
      "2023-01-05"
    );
  });
});
