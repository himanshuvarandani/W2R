import { Router } from "express"
import { connect, disconnect } from "./database"
import Retailer from "./models/retailer"

const router = Router()

router.get("/", (req, resp) => {
  connect()
  const retailers = Retailer.find(
    { isVerified: true },
    (err: any, retailers: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send(retailers)
      }
    }
  )
})

export default router
