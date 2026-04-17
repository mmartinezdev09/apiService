const express = require('express')
const app = express()
const axios = require('axios');
const {ProductController} = require("./FeatureProduct/controllers/productController")
const {ModelController} = require("./FeatureProduct/controllers/modelController")
const {WelcomeController} = require("./FeatureProduct/controllers/welcomeController")

app.use(express.json())

app.get('/welcome', WelcomeController.getWelcomeMessage)
app.get('/getProducts', ModelController.getModelsInventory)
app.post('/getProductById', ProductController.getProductById)
app.get('/getAllProduct', ProductController.getProducts)
const PORT = process.env.PORT || 3000

function startJob() {
    setTimeout(async () => {
        try {
            const response = await axios.get('https://apiservice-qwgz.onrender.com/welcome');
            console.log("Respuesta recibida:", response.data);
        } catch (error) {
            console.error("Error al llamar al endpoint:", error.message);
        } finally {
            startJob();
        }
    }, 5000);
}

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`)
  startJob()
  /*setInterval(()=>{

  })*/
})