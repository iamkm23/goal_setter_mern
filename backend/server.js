require("dotenv").config();
const express = require("express");
const colors = require("colors");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorMiddleware");

const connectDB = require("./db/connectDB");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


// route
app.use("/api/v1/goals", require("./routes/goalRoutes"));

app.use(notFound);
app.use(errorHandler);


const port = process.env.PORT || 4000;
app.listen(port, () => {
  try {
    connectDB(process.env.MONGO_URI);
    console.log(
      `DB connected and server is listening at ${port}`.bgBlue.underline
    );
  } catch (error) {
    console.log(error);
  }
});
