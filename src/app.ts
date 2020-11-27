import express from 'express'

const PORT: number = Number(process.env.PORT) || 5000
const app = express()

app.get('/', (req, resp) => {
  resp.send('Hello there!')
})

app.listen(PORT, () => {
  console.log(`Server running at port ${PORT}...`)
})
