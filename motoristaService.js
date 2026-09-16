const motoristaRepository = require("../repositories/motoristaRepository");

const motoristaService = {

    async cadastrar(dados) {

        if (!dados.nome) {
           erro:erro("O nome do motorista é obrigatório.");
        }

        if (!dados.cpf) {
            throw new Error("O CPF do motorista é obrigatório.");
        }

        if (!dados.telefone) {
            throw new Error("O telefone do motorista é obrigatório.");
        }

        return await motoristaRepository.cadastrar(dados);
    },

    async listar() {
        return await motoristaRepository.listar();
    }

};

module.exports = motoristaService;
