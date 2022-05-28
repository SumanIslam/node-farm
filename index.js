const fs = require('fs');
const http = require('http');
const { dirname } = require('path');
const url = require('url');

const server = http.createServer((req, res) => {
  const path = req.url;
  if(path === '/' || path === '/overview') {
    res.end('this is the overview');
  } else if(path === '/product') {
    res.end('this is teh product page');
  } else if(path === '/api') {
    fs.readFile(`${__dirname}/dev-data/data.json`, 'utf-8', (err, data) => {
      const productData = JSON.parse(data);
      console.log(productData);
    });
    res.end('API')
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('<h1>page not found</h1>');
  }
})

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to request on port 8000...');
})