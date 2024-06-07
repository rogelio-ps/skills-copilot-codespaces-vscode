// Create web server
// 1. Load necessary modules
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('querystring');
// 2. Create server
http.createServer(function (req, res) {
    // 3. Parse the request containing file name
    var pathname = url.parse(req.url).pathname;
    // 4. Read the requested file content from file system
    fs.readFile(pathname.substr(1), function (err, data) {
        if (err) {
            console.log(err);
            // HTTP Status: 404 : NOT FOUND
            // Content Type: text/html
            res.writeHead(404, { 'Content-Type': 'text/html' });
        } else {
            // HTTP Status: 200 : OK
            // Content Type: text/html
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // Write the content of the file to response body
            res.write(data.toString());
        }
        // Send the response body
        res.end();
    });
}).listen(8080);
console.log('Server running at http://