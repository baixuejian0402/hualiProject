const express=require('express');
var server=express();
server.listen(3000);
server.use(express.static('public'));