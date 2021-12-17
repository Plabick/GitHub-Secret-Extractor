import * as core from "@actions/core";

function run(): void {
  const SECRET_INPUT = "secret";
  const MESSAGE =
    "To view the plain-text secret, use the decoder\n";
  const secret = core.getInput(SECRET_INPUT);
  const encoded_secret = shift(secret);
  console.log("Encoded Secret: " + encoded_secret);
  console.log(MESSAGE);
  core.setOutput("EncodedSecret", encoded_secret);
}

function shift(str){
  const OFFSET = 1;
  var outputString = "";
  for(let i = 0; i < str.length ; i++){
    var char = str.charCodeAt(i);
    outputString += String.fromCharCode(char + OFFSET)
  }
  console.log(outputString)
  return outputString;
}

run();
