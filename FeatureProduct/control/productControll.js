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

const ProductController = {
    getProducts: (req, res) => {
        res.json(products);
    },

    getProductById:(req, res) =>{
        res.json(products[req.id])
    }
}

module.exports = { ProductController };