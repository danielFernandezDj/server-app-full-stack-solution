import mongoose from "mongoose";
const { Schema, model } = mongoose

const inStockSchema = new Schema({
  item_stock: Number,
  item_price: Number,
  brand_name: String,
  item_name: String,
  day_of_creation: Date,
  var_code: Number,
  item_image: String,
})

const inStock = model('inStock', inStockSchema)
export default inStock