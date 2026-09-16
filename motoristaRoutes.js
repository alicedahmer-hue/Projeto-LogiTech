const express = require("express");

const router = express.Router();

// Controller dos motoristas
const motoristaController = require("../controller/motoristaController");

// POST /motoristas
// Cadastrar motorista
router.post("/", motoristaController.cadastrar);

// GET /motoristas
// Listar motoristas
router.get("/", motoristaController.listar);

module.exports = router;
