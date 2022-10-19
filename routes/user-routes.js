const express = require('express');
const router = express.Router();
const User = require('../models/User')
const UserController = require('../controllers/user-controller');

router.get("/", UserController.getAllUsers);
router.post("/", UserController.addUsers);
router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);


module.exports = router;