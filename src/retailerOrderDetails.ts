import { Router } from "express"
import { connect, disconnect } from "./database"
import RetailerOrders from "./models/retailerOrders"

const router = Router()

router.get("/", (req, resp) => {
  connect()
  const order = RetailerOrders.find(
    { _id: req.query.id },
    (err: any, order: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send(order)
      }
    }
  )
})

export default router
