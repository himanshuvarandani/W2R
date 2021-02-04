import { Router } from "express"
import { connect, disconnect } from "./database"
import retailerOrders from "./models/retailerOrders"

const router = Router()

router.get("/", (req, resp) => {
  connect()
  const orders = retailerOrders.find({}, (err: any, orders: any) => {
    if (err) {
      resp.send("Error")
    } else {
      resp.send(orders)
    }
  })
})

export default router
