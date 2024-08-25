#! /usr/bin/env node

const importLocal = require("import-local");

if (importLocal(__filename)) {
  require("npmlog").info("cli", "使用本地 rq-cli 脚手架工具");
} else {
  require("../lib")(process.argv.slice(2));
}
