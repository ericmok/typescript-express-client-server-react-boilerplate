const shell = require("shelljs");

shell.cp("app/client/*.html", "app/public/");
//shell.cp("-R", "src/server/public/fonts", "dist/public/");
//shell.cp("-R", "src/server/public/images", "dist/public/");