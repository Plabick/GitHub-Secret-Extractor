import * as core from "@actions/core";
import { run } from "./action";

const SECRET_INPUT_LABEL = "secret";
const OUTPUT_LABEL = "EncodedSecret";

const secret = core.getInput(SECRET_INPUT_LABEL);
const output = run(secret);

core.setOutput(OUTPUT_LABEL, output[0]);
console.log(output[1]);
