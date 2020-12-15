import { Router } from "express"
import { connect, disconnect } from "./database"
import Login from "./models/login"

const router = Router()

router.get("/register", (req, resp) => {
  connect()
  const user = Login.insertMany(
    [
      {
        email: req.params.email,
        password: req.params.password,
        type: req.params.type,
      },
    ],
    (err) => {
      if (err) {
        resp.send("Error")
      } else {
        resp.send("Hey, you are registered.")
      }
    }
  )
})

router.get("/login", (req, resp) => {
  connect()
  const user = Login.find(
    { email: req.params.email, password: req.params.password },
    (err: any, user: any) => {
      if (err) {
        resp.send("Error")
      } else if (user.length) {
        resp.send("Hey, you are logged in.")
      } else {
        resp.send("Sorry, Invalid email and password.")
      }
    }
  )
})

export default router
