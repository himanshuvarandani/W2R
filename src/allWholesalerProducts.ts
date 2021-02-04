import { Router } from "express"
import { connect, disconnect } from "./database"
import WholesalerProducts from "./models/wholesalerProducts"

const router = Router()

router.get("/", (req, resp) => {
  connect()
  const products = WholesalerProducts.find(
    { wholesalerId: req.query.wholesalerId },
    (err: any, products: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send(products)
      }
    }
  )
})

export default router
