"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = void 0;
/**
 * Perform a ceasar cypher on a string with an offset of one
 * @param str a String of ASCII chars
 * @returns {str} with each char shifted up by 1
 */
function encode(str) {
    const OFFSET = 1;
    const NUM_ASCII_CHARS = 128;
    var outputString = "";
    for (let i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        outputString += String.fromCharCode((char + OFFSET) % NUM_ASCII_CHARS);
    }
    return outputString;
}
exports.encode = encode;
