const decom = require("decompress");
var fs = require('fs');
decom("project.zip", "./")
.then((files) => {
    fs.unlinkSync("./project.zip");
});