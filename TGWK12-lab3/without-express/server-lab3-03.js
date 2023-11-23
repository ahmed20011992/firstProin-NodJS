const http = require("http");
const port = 3456;
const fs = require('fs');

const routeMap={
    "/": "./mycv-01.html",
    "/photo.jpg": "./img/photo.jpg"
}
const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  if(routeMap[req.url].slice(-5)==".html"){
    res.setHeader("Content-Type", "text/html");
  }else if(routeMap[req.url].slice(-4)==".jpeg"){
    res.setHeader('Content-Type','image/jpg');
    }
  fs.readFile (routeMap[req.url],(error,data) => { 
    res.write(data);
    res.end();
  });
});

server.listen(port, function () {
    console.log(`server running and listening on port ${port}...`);
});