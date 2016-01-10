"use strict";
let execSync = require("child_process").execSync;
let stat = require("fs").stat

function exec(command) {
  execSync(command, { stdio: [0, 1, 2] });
}

exec("tsd install");

let tscCommand = require("./config").commands.tsc;
exec(tscCommand.join(" "));
