import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
  {
    title: { type: String, required: true},
    desc: { type: String, required: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true },
    
  },
  { timestamps: true }
);
const products = mongoose.model("products", ProductSchema);
export default products;
