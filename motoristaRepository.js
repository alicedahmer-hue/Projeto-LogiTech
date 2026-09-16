const motoristaRepository = {

    async cadastrar(dados) {

        // Aqui será feita a comunicação com o banco de dados.
        // A implementação do SQL será adicionada posteriormente.

        return {
            mensagem: "Motorista preparado para ser cadastrado.",
            dados: dados
        };
    },

    async listar() {

        // Aqui será feita a consulta ao banco de dados.

        return [];
    }

};

module.exports = motoristaRepository;
