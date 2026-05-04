const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://mmartinezdev09_db_user:t0znJyvgZOhy4xSl@cluster0.o5pdjxo.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri,
    {
        serverApi:
        {
            version: ServerApiVersion.v1, 
            strict: true, 
            deprecationErrors: true,
        }
    }
);

let db; 

async function connectDB() {
    if (!db) {
        await client.connect();
        db = client.db("users");
        console.log("Mongo conectado");
    }
}

const UsersController = {
    // Login: verificar usuario y contraseña
    login: async (req, res) => {
        try {
            await connectDB();
            const { name, pwd } = req.body;
            
            if (!name || !pwd) {
                return res.status(400).json({
                    error: "Se requieren name y pwd"
                });
            }
            
            const result = await db.collection("admins").findOne({ 
                "admin.name": name,
                "admin.pwd": pwd
            });
            
            if (result) {
                res.json({
                    success: true,
                    message: "Login exitoso",
                    admin: result.admin
                });
            } else {
                res.status(401).json({
                    success: false,
                    error: "Usuario o contraseña incorrectos"
                });
            }
        } catch (error) {
            console.error("Error en login:", error);
            res.status(500).json({
                error: "Error interno del servidor"
            });
        }
    }
}

module.exports = { UsersController };