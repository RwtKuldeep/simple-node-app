// Import the HTTP module
const http = require('http');

// Define the hostname and port number
const hostname = '0.0.0.0';
const port = 3000;

// Create a HTTP server
const server = http.createServer((req, res) => {
  // Set the status code and content type of the response
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Write the response body
  res.end('Hello, Docker\n');
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
