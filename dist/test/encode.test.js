"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const encode_1 = require("../src/encode");
const letters = "abcdefghijklmnopqrstuvwxyz";
const uppercase_letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
describe("test encode function", () => {
    it("should return bcd for encode abc (simple string)", () => {
        expect((0, encode_1.encode)("abc")).toBe("bcd");
    });
    it("should encode all lowercase letters", () => {
        expect((0, encode_1.encode)(letters)).toBe("bcdefghijklmnopqrstuvwxyz{");
    });
    it("should encode all uppercase letters", () => {
        expect((0, encode_1.encode)(uppercase_letters)).toBe("BCDEFGHIJKLMNOPQRSTUVWXYZ[");
    });
    it("should apply to whitespace", () => {
        expect((0, encode_1.encode)(" ")).toBe("!");
    });
    it("should leave empty string unchanged", () => {
        expect((0, encode_1.encode)("")).toBe("");
    });
});
