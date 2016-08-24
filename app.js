var request = require('request');
var http = require('http');
var url= require('url');
//Lets define a port we want to listen to
const PORT=3000;
var counter = 0;

//We need a function which handles requests and send response
function handleRequest(req, res){
  res.setHeader('Content-type', 'text/html');
  var parsedUrl = url.parse(req.url, true); // true to get query as object
  var queryAsObject = parsedUrl.query;
  var query = queryAsObject.id;
  var data=[];
  req_url= 'https://www.googleapis.com/youtube/v3/playlistItems?key=AIzaSyBj7mztzfuZq_LA_5TYHLAw-Qaa2Fof3JU&playlistId='
  req_url+= query;
  req_url+= '&part=snippet,id&order=date&maxResults=5';
  request( req_url,
 function(error, response, body) {
  body=JSON.parse(body);
  var sendData = [];
  var vid = {};
  for(i in body.items)
  {
    vid_url= 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyBj7mztzfuZq_LA_5TYHLAw-Qaa2Fof3JU&id='
    vid_url+= body.items[i].snippet.resourceId.videoId;
    vid_url+= '&part=statistics,snippet&order=date&maxResults=1';
    request(vid_url, function(error, vid_resp, vid_body) {
      vid_body = JSON.parse(vid_body);
      vid.videoId = vid_body.items[0].id;
      vid.title = vid_body.items[0].snippet.title;
      if(vid_body.items[0].snippet.thumbnails.maxres)
      {
        vid.thumbnails = vid_body.items[0].snippet.thumbnails.maxres.url;
      }
      else if (vid_body.items[0].snippet.thumbnails.standard) 
      {
        vid.thumbnails = vid_body.items[0].snippet.thumbnails.standard.url;
      }
      else if (vid_body.items[0].snippet.thumbnails.high) 
      {
        vid.thumbnails = vid_body.items[0].snippet.thumbnails.high.url;
      }
      else if (vid_body.items[0].snippet.thumbnails.medium) 
      {
        vid.thumbnails = vid_body.items[0].snippet.thumbnails.medium.url;
      }
      else
      {
          vid.thumbnails = vid_body.items[0].snippet.thumbnails.default.url;
      }
      vid.viewCount= vid_body.items[0].statistics.viewCount;
      sendData.push(vid);
      console.log(counter);
      console.log(vid);
      vid = {};
      counter++;
      if(sendData.length == 5)
      {
        console.log("sending");
        res.end(JSON.stringify(sendData));
      }
    });
  }  
});

}


//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    //Callback triggered when server is successfully listening. Hurray!
    console.log("Server listening on: http://localhost:%s", PORT);
});
