let express = require("express");
let app = express();
let fs = require("fs")
let path = require("path")


const appName = __dirname;
console.log(appName);

app.use(express.static(__dirname + "/assets"));

app.get('/*', function (req, res) {

    res.sendFile(path.join(__dirname + '/index.html'));
});

let Port = 4000;
app.listen(Port, () => console.log("Server started on port", Port));