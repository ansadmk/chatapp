require('dotenv').config()
const express = require("express");
const { createServer } = require("node:http");
const cors=require('cors')
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGOURL);
const app = express();
app.use(express.json())
app.use(cors(
  {
    origin: process.env.ORGIN,
    credentials: true,
  }
))
const server = createServer(app);
const router = require("./routes/auth");
const userRouter = require('./routes/user');
app.use('/api',router,userRouter)
server.listen(process.env.PORT, () => {
  console.log(`server running at port ${process.env.PORT}`);
});
