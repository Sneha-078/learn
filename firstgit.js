const http = require('http'); // Import HTTP module

const server = http.createServer((req, res) => {
  res.write('Hello World'); // Write to response
  res.end(); // End response
});

server.listen(4000, () => {
  console.log("server working on 4000")
});

