import { Router } from "express"
import { connect, disconnect } from "./database"
import Wholesaler from "./models/wholesaler"

const router = Router()

router.post("/", (req, resp) => {
  connect()
  const wholesaler = Wholesaler.create(
    {
      email: req.body.email,
      name: req.body.name,
      shopName: req.body.shopName,
      shopAddress: req.body.shopAddress,
      isVerified: "true",
    },
    (err: any, wholesaler: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send({ status: "ok", id: wholesaler._id })
      }
    }
  )
})

export default router
