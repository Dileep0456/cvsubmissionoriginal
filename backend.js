const fs = require('fs');
const path = require('path');
const http = require('http');

http.createServer((req, res) => {
    if (req.url === "/") {
        // Correct path to cvhomepage.html
        fs.readFile("cvhomepage.html", (err, data) => {
            if (err) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Home page loading failed");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else if (req.url==="/button-click") {
        fs.readFile("index2.html", (err, data) => {
            if (err) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Html page loading failed");
            } else {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }
}).listen(8500, () => {
    console.log("Server running at http://localhost:8500");
});
