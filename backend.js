


// const http = require("http");
// const fs = require("fs");



// http.createServer((req, res) => {
//     if (req.url === "/") {
//         fs.readFile("/index.html", (err, data) => {
//             if (err) {
//                 res.writeHead(400, { "Content-Type": "text/plain" });
//                 res.end("Home page loading failed");
//             } else {
//                 res.writeHead(200, { "Content-Type": "text/html" });
//                 res.end(data);
//             }
//         });
//     } else {
//         res.writeHead(404, { "Content-Type": "text/plain" });
//         res.end("Not Found");
//     }
   
        
    
// }).listen(8500, () => {
//     console.log("Server running at http://localhost:8500");
// });



const fs = require('fs');
const path = require('path');
const http = require('http');


http.createServer((req, res) => {
    if (req.url === "/") {
        // Correct path to index.html
        // const filePath = path.join(__dirname, 'index.html');
        // console.log(filePath)

        fs.readFile("index2.html", (err, data) => {
            if (err) {
                res.writeHead(400, { "Content-Type": "text/plain" });
                res.end("Home page loading failed");
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
    console.log(`Server running at http://localhost:8500`);
});
