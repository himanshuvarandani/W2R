import { Router } from "express"
import { connect, disconnect } from "./database"
import WholesalerProducts from "./models/wholesalerProducts"

const router = Router()

router.get("/", (req, resp) => {
  connect()
  const product = WholesalerProducts.find(
    { _id: req.query.id },
    (err: any, product: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send(product)
      }
    }
  )
})

export default router
