const coletaService = require("../services/coletaService");

const coletaController = {

    async listar(req, res) {
        try {
            const coletas = await coletaService.listar();

            res.status(200).json(coletas);

        } catch (erro) {
            res.status(500).json({
                erro: erro.message
            });
        }
    },

    async atualizarStatus(req, res) {
        try {
            const { id } = req.params;
            const { status } = req.body;

            const coleta = await coletaService.atualizarStatus(id, status);

            res.status(200).json(coleta);

        } catch (erro) {
            res.status(400).json({
                erro: erro.message
            });
        }
    }

};

module.exports = coletaController;
