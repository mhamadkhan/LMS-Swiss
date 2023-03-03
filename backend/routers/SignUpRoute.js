

const { Router } = require("express");
const { SignUpData } = require('../controllers/SignUpController');

const router = Router();

router.post('/', SignUpData);

module.exports = router
