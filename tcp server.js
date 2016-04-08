/**
 * Created by blackjack on 4/4/16.
 */
var net=require('net');
var server=net.createServer(function(conn){
    console.log("connected");

    conn.on('data',function(data){
        console.log(data +"from "+conn.remoteAddress+' '+conn.remotePort);
        conn.write('Repeating : '+data);
    });

    conn.on('close', function() {
        console.log('client closed connection');
    });
}).listen(3000);

console.log("server on port 3000");
