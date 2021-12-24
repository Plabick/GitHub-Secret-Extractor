/**
 * Encode a string using a ceasar cypher with an offset of 1
 * @param str a String of ASCII chars 
 * @returns The inputed string with each char shifted up by 1, with wrapping. 
 */
export function encode(str: string) {
  const OFFSET = 1;
  const NUM_ASCII_CHARS = 128; 
  var outputString = "";
  for (let i = 0; i < str.length; i++) {
    var char = str.charCodeAt(i);
    outputString += String.fromCharCode((char + OFFSET) % NUM_ASCII_CHARS);
  }
  return outputString;
}
