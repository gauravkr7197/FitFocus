require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const fitRoutes = require("./routes/index");
const userRoutes = require('./routes/user')

// Intialize express app
const app = express();

//Middleware
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/fitFocus", fitRoutes);
app.use("/api/user",userRoutes)
// app.get('/',(req,res)=>{
//     res.json({msg:'Welcome to the app'})
// })

//Connect to database
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //Listen for requests
    app.listen(process.env.PORT, () => {
      console.log("Connected to database and listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

// //Listen for requests
// app.listen(process.env.PORT, () => {
//   console.log("listening on port", process.env.PORT);
// });
