const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MangoDB database connection established successfully');
});

const rootRouter = require('./routes/root');
app.use('/', rootRouter);

// Adding the route to the server
const personalRouter = require('./routes/personal');
app.use('/personal', personalRouter);

const certificateRouter = require('./routes/certificate');
app.use('/certificate', certificateRouter);



// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
