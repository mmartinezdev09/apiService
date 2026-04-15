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
          prize: 200,
          urlImage: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/ft_150.jpeg'
        },
        {
          name: 'Ft-180',
          prize: 100,
          urlImage: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/italika_180.jpeg'
        },
        {
          name: 'At-110',
          prize: 80,
          urlImage: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/italika_at_110.jpg'
        }
      ]
    }
  )
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})