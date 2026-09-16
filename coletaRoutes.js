const express = require("express");

const router = express.Router();

// Controller das coletas
const coletaController = require("../controller/coletaController");

// GET /coletas
// Listar coletas
router.get("/", coletaController.listar);

// PUT /coletas/:id/status
// Atualizar status da coleta
router.put("/:id/status", coletaController.atualizarStatus);

module.exports = router;
