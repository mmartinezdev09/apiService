const express = require('express')
const app = express()

app.use(express.json())

app.get('/welcome', (req, res) => {
  res.json({ status: 'Bienvenido Rot Crash' })
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})