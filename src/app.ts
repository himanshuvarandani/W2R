import express from "express"
import auth from "./auth"
import fetch from "./fetch"
import add from "./add"

const PORT: number = Number(process.env.PORT) || 5000
const app = express()
app.use(express.json())

app.get("/", (req, resp) => {
  resp.send("Hello there!")
})

app.use("/auth", auth)
app.use("/fetch", fetch)
app.use("/add", add)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`)
})
