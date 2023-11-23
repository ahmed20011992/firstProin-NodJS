const http = require("http");

const fs = require("fs");
const port = 4567;

const routeMap={
    "/": "./mycv-05.html",
    "/img/photo.jpg": "./img/photo.jpg",
    "/MyStyle-05.css": "./css/MyStyle-05.css"
};

const server = http.createServer( (req, res) => {
      console.log("Req URL : ", req.url)
  if (routeMap[req.url]) {
    fs.readFile (routeMap[req.url],(err,data) => {
    if(err){
      res.writeHead(404);
      res.end("not found");
    }else {
  
    if(routeMap[req.url]==".html"){
    res.writeHead({'Content-Type':'text/html'});
  }else if(routeMap[req.url] ==".jpg"){
    res.writeHead({'Content-Type' :'image/jpeg'});

    }
    else if (routeMap[req.url]==".css"){
      
      res.writeHead({'Content-Type' : 'text/css'});

    }
    res.end(data);
  }
  });
} else {
  res.writeHead(404);
  res.end("not found")
}

});
server.listen(port, function () {
    console.log(`server running and listening on port ${port}...`);
});