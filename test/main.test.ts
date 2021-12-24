import { encode } from "punycode";
import { run } from "../src/action";

const SIMPLE_TEST_STRING = "abcdefg"
const FULL_MESSAGE = "***************************\n* Encoded Secret: bcdefgh *\n***************************\nTo view the plain-text secret, use the decoder\nplabick.github.io/ActionsSecretDecoder/"

describe("test run function", () => {
  it("Should produce correctly formatted output message in out[1]", () => {
    expect(run(SIMPLE_TEST_STRING)[1]).toBe(FULL_MESSAGE);
  });
  it("Should return encoded string in out[0]", () => {
    expect(run(SIMPLE_TEST_STRING)[0]).toBe("bcdefgh");
  });
})
