const coletaRepository = require("../repositories/coletaRepository");

const coletaService = {

    async listar() {
        return await coletaRepository.listar();
    },

    async atualizarStatus(id, status) {

        if (!id) {
            throw new Error("O ID da coleta é obrigatório.");
        }

        if (!status) {
            throw new Error("O status da coleta é obrigatório.");
        }

        return await coletaRepository.atualizarStatus(id, status);
    }

};

module.exports = coletaService;
