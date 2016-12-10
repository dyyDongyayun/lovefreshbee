
var express = require('express');
var fs = require('fs');
var app = express();

app.get('*',function (req,res) {
    res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Headers','X-Requested-With');
	res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
    res.sendFile(__dirname + req.path);
});
app.listen(8888);
      console.log('启动成功');
