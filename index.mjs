//-------------- inports --------------
import express from "express";
// importing mongoose
import mongoose from "mongoose";
// importing the routes
import productRoutes from "./routes/product.route.mjs";

// ----------- variables ------------
// setting the port
const port = 3000;
const mongodbUrl =
  "mongodb+srv://Miguel:Dorine2004@crud.lqodb.mongodb.net/?retryWrites=true&w=majority&appName=crud";

// ----------- express app ------------
// creating an express app
const app = express();

// ----------- middleware ------------
// allowing express to parse json through middleware
app.use(express.json());
// allow other formats to be parsed
app.use(express.urlencoded({ extended: true }));

// ----------- routes ------------
// add the routes
app.route("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// ----------- database ------------
// connecting to the database
// mongodb+srv://Miguel:<db_password>@crud.lqodb.mongodb.net/?retryWrites=true&w=majority&appName=crud
mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((error) => log.error("Error connecting to the database", error.stack));
