var express = require('express');
var fs = require('fs');

var port = process.env.PORT || 3000;
var app = express();

app.use(express.static(__dirname + '/'));

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
