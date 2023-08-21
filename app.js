const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello, this is a sample Node.js app!\n');
});

const PORT = process.env.PORT || 3008;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
