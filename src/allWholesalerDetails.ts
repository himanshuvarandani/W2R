import { Router } from "express"
import { connect, disconnect } from "./database"
import Wholesaler from "./models/wholesaler"

const router = Router()

router.get("/", (req, resp) => {
  connect()
  const wholesalers = Wholesaler.find(
    { isVerified: true },
    (err: any, wholesalers: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send(wholesalers)
      }
    }
  )
})

export default router
