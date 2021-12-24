"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encode = void 0;
function encode(str) {
    const OFFSET = 1;
    var outputString = "";
    for (let i = 0; i < str.length; i++) {
        var char = str.charCodeAt(i);
        outputString += String.fromCharCode(char + OFFSET);
    }
    return outputString;
}
exports.encode = encode;
