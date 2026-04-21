const welcomeResponse = {
    message: {
        title: 'Bienvenido',
        subtitle: '"Refaccionaria Bandicoot"',
        container: 'Todo para tu moticicleta',
        cta: 'Ver productos'
    },
    iconUrl: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/main/main_icon_moto.png'
}

const WelcomeController = {
    getWelcomeMessage: (req, res) => {
        res.json(welcomeResponse)
    }
}

module.exports = { WelcomeController }