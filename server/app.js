const express=require('express');
const pool=requeir("./pool");
var server=express();
server.listen(3000);
server.use(express.static('public'));