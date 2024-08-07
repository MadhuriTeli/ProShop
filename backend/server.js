import express, { urlencoded } from "express";
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import productRoutes from "./routes/productRoutes.js";
import userRoutes from './routes/userRouter.js';
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";
const port = process.env.PORT || 5000;

connectDB();    //Connect to MongoDB
const app = express();

//middleware

app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.get("/", (req, res) => {
    res.send("API is running...");
    console.log(products);
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => {
//  console.log(products);
  console.log(`Server running on port ${port}`)
});
