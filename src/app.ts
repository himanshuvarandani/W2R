import express from "express"
import auth from "./auth"
import fetchWholesalerDetails from "./fetchWholesalerDetails"

const PORT: number = Number(process.env.PORT) || 5000
const app = express()
app.use(express.json())

app.get("/", (req, resp) => {
  resp.send("Hello there!")
})

app.use("/auth", auth)
app.use("/fetch_wholesaler_details", fetchWholesalerDetails)

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`)
})
