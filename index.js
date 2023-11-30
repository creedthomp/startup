const database = require('./database');
const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const quotes = [
  "The trials of miles; miles of trials.",
  "Everyone must choose one thing. The pain of discipline or the pain of regret.",
  "Consistent compitence = eventual excellence."
];

// Add this endpoint after the static content hosting middleware
app.get('/api/quotes', (_req, res) => {
  console.log('Request received for /api/quotes');
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});
app.get('/api/shoe', async (req, res) => {
  try {
    const data = await database.getShoeData();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post('/api/shoe', async (req, res) => {
  try {
      const { username, shoe, miles } = req.body;
      // Logic to check if shoe exists for user and update or add accordingly
      // Use functions from database.js
      await database.updateShoeData(username, shoe, miles);
      res.status(200).json({ message: 'Shoe data updated successfully' });
  } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
  }
});
// app.post('/api/shoe', async (req, res) => {
//   try {
//     const shoeData = req.body;
//     await database.addShoeData(shoeData);
//     res.status(200).json({ message: 'Data saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get('/api/shoe', async (req, res) => {
//   try {
//     const data = await database.getShoeData();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

// const database = require('./database');
// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// const quotes = [
//   "The trials of miles; miles of trials.",
//   "Everyone must choose one thing. The pain of discipline or the pain of regret.",
//   "Consistent compitence = eventual excellence."
// ];

// // Add this endpoint after the static content hosting middleware
// app.get('/api/quotes', (_req, res) => {
//   console.log('Request received for /api/quotes');
//   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//   res.json({ quote: randomQuote });
// });


// app.post('/api/shoe', async (req, res) => {
//   try {
//     const shoeData = req.body;
//     await database.addShoeData(shoeData);
//     res.status(200).json({ message: 'Data saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get('/api/shoe', async (req, res) => {
//   try {
//     const data = await database.getShoeData();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });

// app.post('/api/shoe', async (req, res) => {
//   try {
//     const shoeData = req.body;
//     const result = await addShoeData(shoeData);
//     res.status(200).json(result);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });


// app.post('/api/shoe', async (req, res) => {
//   try {
//     const shoeData = req.body;
//     await database.addShoeData(shoeData);
//     res.status(200).json({ message: 'Data saved successfully' });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// app.get('/api/shoe', async (req, res) => {
//   try {
//     const data = await database.getShoeData();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });



// const express = require('express');
// const path = require('path');
// const app = express();

// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // other routes and middleware...

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });

// // The service port. In production the front-end code is statically hosted by the service on the same port.

// //const port = process.argv.length > 2 ? process.argv[2] : 3000;

// const port = 3000;

// // JSON body parsing using built-in middleware
// app.use(express.json());

// // Serve up the front-end static content hosting
// app.use(express.static('public'));

// Router for service endpoints
// var apiRouter = express.Router();
// app.use(`/api`, apiRouter);

// const quotes = [
//   "The trials of miles; miles of trials.",
//   "Everyone must choose one thing. The pain of discipline or the pain of regret.",
//   "Consistent compitence = eventual excellence."
// ];

// // Add this endpoint after the static content hosting middleware
// app.get('/api/quotes', (_req, res) => {
//   console.log('Request received for /api/quotes');
//   const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
//   res.json({ quote: randomQuote });
// });

// // app.get('/', (req, res) => {
// //   res.send('Hello world');
// // });

// // Return the application's default page if the path is unknown
// app.use((_req, res) => {
//   res.sendFile('index.html', { root: 'public' });
// });

// app.listen(port, () => {
//   console.log(`Listening on port ${port}`);
// });




