import { Router } from "express"
import { connect, disconnect } from "./database"
import Retailer from "./models/retailer"

const router = Router()

router.get("/", (req, resp) => {
  connect()
  const retailer = Retailer.find(
    { _id: req.query.id },
    (err: any, retailer: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send(retailer)
      }
    }
  )
})

export default router
