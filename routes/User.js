const express = require('express');
const router = express.Router();

const usersController = require("../controllers/Users_Controller");

router.post('/create',usersController.createUser);
router.post('/login',usersController.login);

module.exports = router;
