const coletaRepository = {

    async listar() {

        // Aqui será feita a consulta das coletas no banco de dados.

        return [];
    },

    async atualizarStatus(id, status) {

        // Aqui será feita a atualização no banco de dados.

        return {
            id: id,
            status: status
        };
    }

};

module.exports = coletaRepository;
