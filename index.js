const express = require('express')
const http = require('http')
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
  setInterval(() => { http.get(`https://apiservice-qwgz.onrender.com/welcome`, (res) => { console.log('ping ok', res.statusCode); }).on('error', (err) => { console.error('ping error', err.message); }); }, 5 * 60 * 1000);
})