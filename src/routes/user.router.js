const { getAll, create, getOnlyOneUser, removeUser, updateUser } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route("/")
		.get(getAll)
		.post(create)

userRouter.route("/:id")
		.get(getOnlyOneUser)
		.delete(removeUser)
		.put(updateUser)


module.exports = userRouter;