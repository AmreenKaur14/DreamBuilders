const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/user.route.js');
const authRouter = require('./routes/auth.route.js');
const dotenv = require('dotenv');

dotenv.config(); // Load environment variables from .env file

mongoose.connect('mongodb+srv://amreen:amreen@hothome.noc02ys.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB!');
}).catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});

const app = express();

app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter); // Include your authentication routes here

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
