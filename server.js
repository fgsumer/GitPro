const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;
require('dotenv').config();

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

const userRouter = require('./routes/createUser'); // to register
app.use('/user', userRouter);

const authRouter = require('./routes/loginUser'); // to login
app.use('/auth', authRouter);

// const rootRouter = require('./routes/root'); // to list the users
// app.use('/', rootRouter);

// Adding the route to the server
const personalRouter = require('./routes/personal');
app.use('/personal', personalRouter);

const ImageRouter = require('./routes/imageRouter');
app.use('/image', ImageRouter);
app.use('/uploads', express.static('uploads'));
// const certificateRouter = require('./routes/certificate');
// app.use('/certificate', certificateRouter);
// // console.log that your server is up and running

// const projectsRouter = require('./routes/projects');
// app.use('/projects', projectsRouter);

// const gitHubRouter = require('./routes/gitHub');
// app.use('/gitHub', gitHubRouter);

// create another GET route
//app.get('/express_backend', (req, res) => {
//  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
//});

app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .listen(port, () => console.log(`Listening on port ${port}`));

// const multer = require('multer');

// app.use(express.static('public'));

// var storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, 'public/images/uploads');
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + '-' + file.originalname);
//   },
// });

// const upload = multer({ storage });

// app.use(cors());

// app.post('/upload', upload.single('image'), (req, res) => {
//   if (req.file)
//     res.json({
//       imageUrl: `images/uploads/${req.file.filename}`,
//     });
//   else res.status('409').json('No Files to Upload.');
// });
