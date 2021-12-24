import { encode } from "./encode";
/**
 * Encode a Secret and output it with instructions for decoding 
 * @param secret A GitHub Actions secret to be encoded and printed
 * @returns A 2-tuple, [<encoded secret>, <message to print to console>]
 */
export function run(secret: string): [string, string] {
  const LINE_DASH = "*";
  const decoder_link_message =
    "To view the plain-text secret, use the decoder\nplabick.github.io/ActionsSecretDecoder/";
  const encoded_secret = encode(secret);
  const encoded_secret_message = `${LINE_DASH} Encoded Secret: ${encoded_secret} ${LINE_DASH}`;
  const divider = LINE_DASH.repeat(encoded_secret_message.length);

  const printable_message = `${divider}\n${encoded_secret_message}\n${divider}\n${decoder_link_message}`;

  return [encoded_secret, printable_message];
}
