const express = require('express')
const app = express()

app.use(express.json())

app.get('/welcome', (req, res) => {
  res.json({ status: 'Bienvenido Rot Crash' })
})

app.get('/getProducts', (req, res) => {
  res.json(
    {
      products: 
      [
        {
          name: 'Ft-150',
          prize: 200
        },
        {
          name: 'Ft-180',
          prize: 100
        },
        {
          name: 'Ft-110',
          prize: 80
        }
      ]
    }
  )
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})