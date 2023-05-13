import * as helios from "@hyperionbt/helios";
import fs from "fs";

// change to true when deploying
const simplify = false;

const qvScript = fs.readFileSync("./contract/src/swappingContract.hl", "utf8");
const qv = helios.Program.new(qvScript);
qv.compile(simplify);
