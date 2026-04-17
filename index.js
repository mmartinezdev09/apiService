const express = require('express')
const app = express()
const {ProductController} = require("./FeatureProduct/controllers/productController")
const {ModelController} = require("./FeatureProduct/controllers/modelController")
const {WelcomeController} = require("./FeatureProduct/controllers/welcomeController")

app.use(express.json())

app.get('/welcome', WelcomeController.getWelcomeMessage)
app.get('/getProducts', ModelController.getModelsInventory)
app.post('/getProductById', ProductController.getProductById)
app.get('/getAllProduct', ProductController.getProducts)
const PORT = process.env.PORT || 3000

app.listen(PORT,async () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
 (async ( ) => {
  setTimeout(() => {
    // Code to execute after 2 seconds
    console.log('😍')
}, 2000);

}) ( )
})