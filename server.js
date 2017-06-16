var express = require('express');
var app = express();

app.use(express.static(__dirname+'/public'));
app.route('/')
    .get((req,res,next)=>{
    res.sendfile('./test/index.html');
});
app.listen(3031);
