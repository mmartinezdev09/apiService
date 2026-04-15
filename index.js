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
          id: 1,
          name: 'Ft-150',
          urlImage: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/ft_150.jpeg'
        },
        {
          id: 2,
          name: 'Ft-180',
          urlImage: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/italika_180.jpeg'
        },
        {
          id: 3,
          name: 'At-110',        
          urlImage: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/italika_at_110.jpg'
        }
      ]
    }
  )
})

//post from products by id

app.post('/getProductById', (req, res) => {
  const { id } = req.body

  let response = null

  if (id === 1) {
    response = {
      name: "Balatas traseras Ft-150",
      prize: 135.00,
      imageUrl: ""
    }
  } else if (id === 2) {
    response = {
      name: "Llantas",
      prize: 100.0,
      imageUrl: ""
    }
  } else {
    return res.status(404).json({
      error: "Producto no encontrado"
    })
  }

  res.json(response)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})