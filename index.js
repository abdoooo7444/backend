const express = require('express');
const app = express();

// Use express.json() for JSON body parsing
app.use(express.json());

const mongooses = require('./db/db');
const movierouter = require('./routes/movieRoute');
const foodrouter = require('./routes/foodRoute');
const cardrouter = require('./routes/cardRouter');

app.use('/api/movie',movierouter);
app.use('/api/food',foodrouter);
app.use('/api/card',cardrouter);

app.listen(5000, () => {
    console.log("Server is running on port 3000!");
});
