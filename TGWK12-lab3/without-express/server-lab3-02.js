const http = require("http");
const port = 2345;
htmlpage= `<!DOCTYPE html>
<html lang=”en”>
 <head>
   <meta charset=”utf-8”/>   
 </head>
 <body>
    <h1>Hello World!</h1>
 </body>
</html>`;
const server = http.createServer(function (req, res) {
  res.statusCode = 200;
  res.setHeader("content-type", "text/HTML");
  
  res.end(htmlpage);
});

server.listen(port, function () {
console.log(`server running and listening on port ${port}...`);
});
