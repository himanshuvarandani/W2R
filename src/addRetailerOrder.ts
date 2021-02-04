import { Router } from "express"
import { connect, disconnect } from "./database"
import RetailerOrders from "./models/retailerOrders"

const router = Router()

router.post("/", (req, resp) => {
  connect()
  const order = RetailerOrders.create(
    {
      retailerId: req.body.retailerId,
      wholesalerId: req.body.wholesalerId,
      productIds: req.body.productIds,
      quantities: req.body.quantities,
      prices: req.body.prices,
      totalPrice: req.body.totalPrice,
    },
    (err: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send({ status: "ok" })
      }
    }
  )
})

export default router
