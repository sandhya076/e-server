import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoute from "./routes/user.js";
import auth from "./routes/auth.js";
import product from "./routes/Product.js";
import cart from "./routes/cart.js";
import order from "./routes/order.js";
import stripe from "./routes/stripe.js";
import cors from "cors";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successful!!"))
  .catch((err) => console.log(err));
app.use(cors());
app.use(express.json());
app.get("/",(req,res)=>{
  res.send("WELCOME TO EMART SERVER")
})
app.use("/users", userRoute);
app.use("/auths", auth);
app.use("/products", product);
app.use("/carts", cart);
app.use("/orders", order);
app.use("/checkout", stripe);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server is Running ");
});
