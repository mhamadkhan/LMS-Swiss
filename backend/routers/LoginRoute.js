

const { Router } = require("express");
const { LoginData } = require('../controllers/LoginController');

const router = Router();

router.post('/', LoginData);

module.exports = router
