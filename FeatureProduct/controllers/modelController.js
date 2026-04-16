const models = {
    products:
        [
            {
                id: 1,
                name: 'Ft-150',
                urlImage: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/ft_150.jpeg'
            },
            {
                id: 2,
                name: 'Ft-180',
                urlImage: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/italika_180.jpeg'
            },
            {
                id: 3,
                name: 'At-110',
                urlImage: 'https://raw.githubusercontent.com/mmartinezdev09/apiService/main/images/italika_at_110.jpg'
            }
        ]
}


const ModelController = {

    getModelsInventory: (req, res) => {
        res.json(models);
    }
}

module.exports = { ModelController };
