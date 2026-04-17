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
const welcomeResponse = {
    message: 'Bienvenido',
    iconUrl: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/main/icn_main.jpg'
}

const WelcomeController = {
    getWelcomeMessage: async (req, res) => {
        try {
            await connectDB();
            const result = await db.collection("users").findOne();
            res.json(
                {
                    message: 'Bienvenido',
                    iconUrl: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/main/icn_main.jpg',
                    data: result.users
                }
            );
        } catch (error) {
            res.status(500).json(
                {
                    error: error.message
                }
            );
        }
    }
}

module.exports = { WelcomeController }