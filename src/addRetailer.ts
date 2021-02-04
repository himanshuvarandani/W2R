import { Router } from "express"
import { connect, disconnect } from "./database"
import Retailer from "./models/retailer"

const router = Router()

router.post("/", (req, resp) => {
  connect()
  const retailer = Retailer.create(
    {
      email: req.body.email,
      name: req.body.name,
      shopName: req.body.shopName,
      shopAddress: req.body.shopAddress,
      isVerified: "true",
    },
    (err: any, retailer: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send({ status: "ok", id: retailer._id })
      }
    }
  )
})

export default router
