const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mmartinezdev09_db_user:t0znJyvgZOhy4xSl@cluster0.o5pdjxo.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri,
    {
        serverApi:
        {
            version: ServerApiVersion.v1, strict: true, deprecationErrors: true,
        }
    }
);

let db; //connect data base 

async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db("users");
        console.log("Mongo conectado");
    }
}

const ProductController = {
    getProductById: async (req, res) => {
        try {
            await connectDB();
            const { id } = req.body
            const idBusqueda = Number(id); 
            const result = await db.collection("products").findOne({ id: idBusqueda });
            res.json(
                {
                    products: result.data
                }
            );
        } catch (error) {
            res.status(404).json({
                error: "Producto no encontrado"
            })
        }
    }
}

module.exports = { ProductController };