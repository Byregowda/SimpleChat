var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/',function(req,res){
    //  res.send('<h1>Hello World</h1>')
     res.sendFile(__dirname+'/index.html');
});

io.on('connection',function(socket){
    // console.log("A1 user connected");
    // socket.on('disconnect',function(){
    //     console.log('User Disconnected');
    // })

    socket.on('chat message',function(msg){
        //console.log('message :'+msg);
        io.emit('chat message',msg);
    })
});



var port = process.env.port||3000;

http.listen(port,function(){
    console.log("server running at 3000");
})