const motoristaService = require("../services/motoristaService");

const motoristaController = {

    async cadastrar(req, res) {
        try {
            const motorista = await motoristaService.cadastrar(req.body);

            res.status(201).json(motorista);

        } catch (erro) {
            res.status(400).json({
                erro: erro.message
            });
        }
    },

    async listar(req, res) {
        try {
            const motoristas = await motoristaService.listar();

            res.status(200).json(motoristas);

        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    }

};

module.exports = motoristaController;
