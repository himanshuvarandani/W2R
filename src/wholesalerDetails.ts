import { Router } from "express"
import { connect, disconnect } from "./database"
import Wholesaler from "./models/wholesaler"

const router = Router()

router.get("/", (req, resp) => {
  connect()
  const wholesaler = Wholesaler.find(
    { _id: req.query.id },
    (err: any, wholesaler: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send(wholesaler[0])
      }
    }
  )
})

export default router
