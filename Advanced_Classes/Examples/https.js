const fs = require('fs');

const server = require('https').createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
});

server.on('request', (req, res) => {
    res.writeHead(200);
    res.end('Hello world\n');
});

server.listen(8000);
const fs = require('fs');

const server = require('https').createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
});

server.on('request', (req, res) => {
    res.writeHead(200);
    res.end('Hello world\n');
});

server.listen(8000);
