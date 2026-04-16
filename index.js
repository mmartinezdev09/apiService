const express = require('express')
const app = express()

app.use(express.json())

app.get('/welcome', (req, res) => {
  res.json(
    { 
      message: 'Bienvenido nuevamente',
      iconUrl: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/main/icn_main.jpg' 
    }
)
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

const products = {
  1: {
    products: [
      {
        name: "Balatas traseras Ft-150",
        prize: 135.00,
        mark: "Generica",
        availability: "Disponible",
        imageUrl: "https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/products/ft150/balatas_150.jpg"
      },
      {
        name: "Chicote de clutch",
        prize: 80.00,
        mark: "Italika",
        availability: "Disponible",
        imageUrl: ""
      },
      {
        name: "Kit de arrastre",
        prize: 287.00,
        mark: "Motors",
        availability: "Disponible",
        imageUrl: ""
      },
      {
        name: "Foco para faro",
        prize: 40.0,
        mark: "Duck",
        availability: "Disponible",
        imageUrl: ""
      }
    ]
  },
  2: {
    products: [
      {
        name: "Llantas",
        prize: 100.0,
        mark: "Generica",
        availability: "Disponible",
        imageUrl: "https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/products/ft180/llantas.jpg"
      },
      {
        name: "Palanca de cambios",
        prize: 120.0,
        mark: "Generica",
        availability: "No disponible",
        imageUrl: ""
      }
    ]
  },
  3: {
    products: [
      {
        name: "Espejos",
        prize: 110.0,
        mark: "Generica",
        availability: "Disponible",
        imageUrl: ""
      }
    ]
  }
}

app.post('/getProductById', (req, res) => {
  const { id } = req.body

  const product = products[id]

  if (!product) {
    return res.status(404).json({
      error: "Producto no encontrado"
    })
  }

  res.json(product)
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
})