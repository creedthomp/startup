// const express = require('express');
// const app = express();
// const http = require('http');
// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   res.write(`<h1>Hello Node.js! [${req.method}] ${req.url}</h1>`);
//   res.end();
// });

// server.listen(8080, () => {
//   console.log(`Web service listening on port 8080`);
// });
// // I need to save it before running it in the console

// app.use((req, res, next) => {
//     console.log(req.originalUrl);
//     next();
//   });
// // idk if this is supposed to be here but ig we will see 
// app.use(express.static('public'));



const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.

//const port = process.argv.length > 2 ? process.argv[2] : 3000;

const port = 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// // Router for service endpoints
// var apiRouter = express.Router();
// app.use(`/api`, apiRouter);
const quotes = [
  "The trials of miles; miles of trials.",
  "Everyone must choose one thing. The pain of discipline or the pain of regret.",
  "Consistent compitence = eventual excellence."
];

// Add this endpoint after the static content hosting middleware
// app.get('/api/quotes', (_req, res) => {
//   console.log('Request received for /api/quotes');
//   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//   res.json({ quote: randomQuote });
// });

app.get('/', (req, res) => {
  res.send('Hello world');
});

// Return the application's default page if the path is unknown
app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});




