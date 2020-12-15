import { Schema, model } from "mongoose"

const productSchema = new Schema({
  wholesalerId: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  tags: { type: Array },
  imageUrls: { type: Array },
  brand: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  lastUpdated: { type: String, default: new Date().toString() },
})

const WholesalerProducts = model(
  "wholesalerProducts",
  productSchema,
  "wholesalerProducts"
)
export default WholesalerProducts
