const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const ConnectDB = require('./db/db');
const router = require('./routes/coffee.route');
const userRouter = require('./routes/user.route');
const addProductRouter = require('./routes/addProduct.route');





dotenv.config();
// Define Port
const port = process.env.PORT || 3000;
const mongoUri = process.env.MONGODB_URI;

const app = express();
// middleware
app.use(cors());
app.use(express.json());

// DB Connect
ConnectDB(mongoUri);

// routes
app.use('/coffees', router)
app.use('/users', userRouter)
app.use('/addProducts', addProductRouter)


app.use('*', (req, res) => {
  res.status(404).json({
    message: 'Page not found'
  })
})


// listen
app.listen(port, () => {
  console.log(`SIMPLE CRUD IS RUNNING ON PORT ${port}`)
})
