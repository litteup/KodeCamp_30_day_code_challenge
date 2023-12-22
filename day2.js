const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Welcome to KodeCamp 30-Day Code Challenge!');
});

const port  = 3000;

server.listen(port, () => console.log(`Server running on port ${port}`) );