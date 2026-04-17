const express = require('express')
const axios = require('axios')
const app = express()
const { ProductController } = require("./FeatureProduct/controllers/productController")
const { ModelController } = require("./FeatureProduct/controllers/modelController")
const { WelcomeController } = require("./FeatureProduct/controllers/welcomeController")

app.use(express.json())

app.get('/welcome', WelcomeController.getWelcomeMessage)
app.get('/getProducts', ModelController.getModelsInventory)
app.post('/getProductById', ProductController.getProductById)
app.get('/getAllProduct', ProductController.getProducts)
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
  setInterval( async () => { 
    const response = await axios.get('https://apiservice-qwgz.onrender.com/welcome');
    console.log('RESPONSE OK 200 ', response.data);
  }, 40 * 1000);
})