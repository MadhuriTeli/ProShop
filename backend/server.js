import express from "express";
//import products from "./data/product";
// import products from './data/product';
const port = process.env.PORT || 5000;

const app = express();

// app.get("/api/products", (req, res) => {
//   res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//   const product = products.find((p) => p._id === req.params.id);
//   res.json(product);
// });

app.get("/", (req, res) => {
    res.send("API is running...");
    console.log(products);
});

app.listen(port, () => {
//  console.log(products);
  console.log(`Server running on port ${port}`)
});