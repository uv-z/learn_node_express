var express = require("express");
var app = express();
var fs = require("fs");

app.get("/listUsers", function (req, res) {
  console.log("req: ", req);
  fs.readFile(__dirname + "/" + "users.json", "utf8", function (err, data) {
    res.end(data);
  });
});

var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log("应用实例，访问地址为 http://localhost:%s", port);
});
