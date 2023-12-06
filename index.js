// const database = require('./database');
// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.json());

const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const express = require('express');
const app = express();
const database = require('./database.js');

const authCookieName = 'token';
app.use(express.json()); 
app.use(cookieParser());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// here 
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

// CreateAuth token for a new user
apiRouter.post('/auth/create', async (req, res) => {
  if (await database.getUser(req.body.email)) {
    res.status(409).send({ msg: 'Existing user' });
  } else {
    const user = await database.createUser(req.body.email, req.body.password);

    // Set the cookie
    setAuthCookie(res, user.token);

    res.send({
      id: user._id,
    });
  }
});

// GetAuth token for the provided credentials
apiRouter.post('/auth/login', async (req, res) => {
  const user = await database.getUser(req.body.email);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorize' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await database.getUser(req.params.email);
  if (user) {
    const token = req?.cookies.token;
    res.send({ email: user.email, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
// var secureApiRouter = express.Router();
// apiRouter.use(secureApiRouter);

// secureApiRouter.use(async (req, res, next) => {
//   authToken = req.cookies[authCookieName];
//   const user = await database.getUserByToken(authToken);
//   if (user) {
//     next();
//   } else {
//     res.status(401).send({ msg: 'Unauthori' });
//   }
// });

//commenting this out made my quotes work.. ^^^

//to here 





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

// app.get('/api/shoe', async (req, res) => {
//   try {
//     const data = await database.getShoeData();
//     res.status(200).json(data);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });
app.get('/api/shoe', async (req, res) => {
  const username = req.query.user; // Extract username from query parameter
  try {
      const userShoes = await database.getUserShoeData(username);
      res.json(userShoes);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
});
// app.get('/api/shoe', async (req, res) => {
//   const username = req.query.user; // Retrieve username from query
//   const userShoes = await database.getUserShoeData(username);
//   res.json(userShoes);
// });

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

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

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




