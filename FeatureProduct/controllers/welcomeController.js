const welcomeResponse = {
    message: 'Bienvenido amigo mio',
    iconUrl: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/main/icn_main.jpg'
}

const WelcomeController = {
    getWelcomeMessage: (req, res) => {
        res.json(welcomeResponse)
    }
}

module.exports = { WelcomeController }