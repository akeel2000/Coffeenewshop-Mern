// packages import
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

const app = express();

// Port allocation
const PORT = process.env.PORT || 8090;

app.use(cors());
app.use(bodyParser.json());

// Database connection
const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connection Success!"))
.catch((err) => {
  console.error("MongoDB connection error:", err.message);
  process.exit(1);
});

// AKEEL
const contactusRouter = require("./Routes/Cofee.js");
app.use("/contactus", contactusRouter);

const booktableRouter = require("./Routes/book.js");
app.use("/booktable", booktableRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is up and running at port: ${PORT}`);
});
