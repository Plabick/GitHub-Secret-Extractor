import { encode } from "../src/encode";

const letters = "abcdefghijklmnopqrstuvwxyz";
const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

describe("test encode function", () => {
  it("should return bcd for encode abc (simple string)", () => {
    expect(encode("abc")).toBe("bcd");
  });
  it("should encode all lowercase letters", () => {
    expect(encode(letters)).toBe("bcdefghijklmnopqrstuvwxyz{");
  });
  it("should encode all uppercase letters", () => {
    expect(encode(uppercase_letters)).toBe("BCDEFGHIJKLMNOPQRSTUVWXYZ[");
  });
  it("should apply to whitespace", () => {
    expect(encode(" ")).toBe("!");
  });
  it("should leave empty string unchanged", () => {
    expect(encode("")).toBe("");
  });
});
