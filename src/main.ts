import * as core from "@actions/core";

function run(): void {
  const LINE_DASH = "*"
  const NEW_LINE = "\n";
  const LOG_SECRET_LABEL = " Base 64 Encoded Secret: ";
  const SECRET_INPUT_LABEL = "secret";
  const FINAL_MESSAGE =
    "To view the secret as plain text, use a base64 decoder such as this one \n";

  const SECRET = core.getInput(SECRET_INPUT_LABEL);
  const ENCODED_SECRET = utf8_to_b64(SECRET);
  const SECRET_MESSAGE = LINE_DASH + LOG_SECRET_LABEL + ENCODED_SECRET + " " + LINE_DASH;
  const DIVIDER = LINE_DASH.repeat(SECRET_MESSAGE.length);
  console.log(DIVIDER + NEW_LINE + SECRET_MESSAGE + NEW_LINE+  DIVIDER + NEW_LINE+ FINAL_MESSAGE);
}

function utf8_to_b64(str: string) {
  return Buffer.from(str).toString('base64')
}

run();
