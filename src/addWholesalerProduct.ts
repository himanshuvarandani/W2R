import { Router } from "express"
import { connect, disconnect } from "./database"
import WholesalerProducts from "./models/wholesalerProducts"

const router = Router()

router.post("/", (req, resp) => {
  connect()
  const product = WholesalerProducts.create(
    {
      wholesalerId: req.body.wholesalerId,
      name: req.body.name,
      description: req.body.description,
      tags: req.body.tags,
      imageUrls: req.body.imageUrls,
      brand: req.body.brand,
      price: req.body.price,
      quantity: req.body.quantity,
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
