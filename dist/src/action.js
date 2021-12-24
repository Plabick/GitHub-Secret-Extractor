"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const encode_1 = require("./encode");
function run(secret) {
    const LINE_DASH = "*";
    const decoder_link_message = "To view the plain-text secret, use the decoder\nplabick.github.io/ActionsSecretDecoder/";
    const encoded_secret = (0, encode_1.encode)(secret);
    const encoded_secret_message = `${LINE_DASH} Encoded Secret: ${encoded_secret} ${LINE_DASH}`;
    const divider = LINE_DASH.repeat(encoded_secret_message.length);
    const printable_message = `${divider}\n${encoded_secret_message}\n${divider}\n${decoder_link_message}`;
    return [encoded_secret, printable_message];
}
exports.run = run;
