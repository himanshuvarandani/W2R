import { Schema, model } from "mongoose"

const orderSchema = new Schema({
  retailerId: { type: String, required: true },
  wholesalerId: { type: String, required: true },
  productIds: { type: Array, required: true },
  quantities: { type: Array, required: true },
  prices: { type: Array, required: true },
  totalPrice: { type: Number, required: true },
  bookedAt: { type: String, default: new Date().toString() },
})

const Orders = model("retailerOrders", orderSchema, "retailerOrders")

export default Orders
