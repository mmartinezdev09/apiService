const welcomeResponse = {
    message: 'Bienvenido de nuevo',
    iconUrl: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/main/main_icon_moto.png'
}

const WelcomeController = {
    getWelcomeMessage: (req, res) => {
        res.json(welcomeResponse)
    }
}

module.exports = { WelcomeController }