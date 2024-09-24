// Import required modules
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require('express-session');
const MongoStore = require('connect-mongo'); // For storing sessions in MongoDB

// Load environment variables from .env file
dotenv.config();

const app = express();

// Port allocation
const PORT = process.env.PORT || 8090;

// MongoDB connection URL
const URL = process.env.MONGODB_URL;

// MongoDB connection
mongoose.connect(URL)
  .then(() => console.log("MongoDB Connection Success!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1);
  });

// Set up CORS to allow requests from the frontend
app.use(cors({
  origin: 'http://localhost:3000', // Allow only requests from this origin
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
}));

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.json());

// Serve static files from the uploads folder
app.use('/uploads', express.static('uploads'));

// Session configuration with MongoDB
app.use(
  session({
    secret: '7132', // Use a strong secret key
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: URL }), // Store sessions in MongoDB
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24, // Session expires after 1 day
      secure: process.env.NODE_ENV === 'production',
    },
  })
);


// Define routes
const contactusRouter = require("./Routes/Contactus.js");
app.use("/contactus", contactusRouter);

const booktableRouter = require("./Routes/book.js");
app.use("/booktable", booktableRouter);

const authRouter = require("./Routes/auth.js");
app.use("/auth", authRouter);

const productRouter = require("./Routes/product");
app.use('/product', productRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is up and running at port: ${PORT}`);
});
