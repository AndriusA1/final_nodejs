const express = require("express");
const router = express.Router();
const { createUser } = require("../controler/maiinControler");

router.post("/createUser", createUser);

module.exports = router;
