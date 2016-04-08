/**
 * Created by blackjack on 4/4/16.
 */

var http=require('http');
var fs=require('fs');

function writenums(res)
{
    var counter=0;
    for (var i = 0; i<100; i++)
    {
        counter++;
        res.write(counter.toString() + '\n');
    }
}
http.createServer(function(req,res){

    var query=require('url').parse(req.url).query;
    var app=require('querystring').parse(query).file +".txt";

    res.writeHead(200,{'content-type':'text/plain'});

    writenums(res);

    setTimeout(function(){
        console.log("opening "+app);
        fs.readFile(app,'utf8',function(err,data){
           if(err)
           {
               res.end("Could not open the file");
           }
            else
           {
               res.write(app);
               res.end();
           }
        });

    },2000);
}).listen(2000);

console.log("server on port 2000");
