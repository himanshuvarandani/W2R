import { Router } from "express"
import { connect, disconnect } from "./database"
import Login from "./models/login"

const router = Router()

router.post("/register", (req, resp) => {
  connect()
  const user = Login.create(
    {
      email: req.body.email,
      password: req.body.password,
      id: req.body.id,
      type: req.body.type,
    },
    (err) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send({ status: "ok" })
      }
    }
  )
})

router.get("/login", (req, resp) => {
  connect()
  const user = Login.find(
    { email: req.query.email, password: req.query.password },
    (err: any, user: any) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send(user)
      }
    }
  )
})

export default router
