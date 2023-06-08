// const express = require('express');
// const { countryRoutes } = require('./routes/countryRoute');
// const { writerRoutes } = require('./routes/writerRoute');
// const { booksRoutes } = require('./routes/booksRoute');

// const { db } = require('./config/db');
// const cors = require('cors');
// const app = express();
// require('dotenv').config()

// db.connect();
// app.use(express.static('frontend/build'));
// app.use(cors());



// app.use('/api/country', countryRoutes)
// app.use('/api/writer', writerRoutes)
// app.use('/api/books', booksRoutes)


// app.listen(3000, () => {
//     console.log('Server is running on port 3000');
//   });

const express = require('express');
const { countryRoutes } = require('./routes/countryRoute');
const { writerRoutes } = require('./routes/writerRoute');
const { booksRoutes } = require('./routes/booksRoute');
const { default: mongoose } = require('mongoose');
const app = express();
const cors = require('cors');
const { connectDb } = require('./config/db');
require('dotenv').config()
const path = require("path");
const fileUpload = require("express-fileupload");



app.use(express.urlencoded({ extended: false }));
app.use(fileUpload());

app.use(cors());
app.use(express.static(path.join(__dirname, "imgs")));


connectDb();
app.use(express.json())


app.use('/api/country', countryRoutes)
app.use('/api/writer', writerRoutes)
app.use('/api/books', booksRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});