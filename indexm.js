var express = require('express');
var app = express();
var path = require('path');

app.use(express.static('public'));

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/view/index.html'));
});
//dfgsdfg
app.listen(3004);