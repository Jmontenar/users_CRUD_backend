const catchError = require('../utils/catchError');
const User = require('../models/Users.js');

const getAll = catchError(async(req, res) => {
    const users = await User.findAll();
return res.json(users);
});

const create = catchError(async(req, res) =>{
    const { first_name, last_name, email, password, birthday } = req.body;
    const newUser = await User.create({
        first_name,
        last_name,
        email,
        password,
        birthday
    }) 
    return res.status(201).json(newUser);
})

const getOnlyOneUser = catchError(async(req, res) =>{
    const { id } = req.params;
    const userbyPK = await User.findByPk(id);
    return res.json(userbyPK)
})

const removeUser = catchError(async(req, res) => {
		const { id } = req.params;
		await User.destroy({ where: {id}});
    return res.sendStatus(204);
});

const updateUser = catchError(async(req, res) =>{
    const {id} = req.params;
    const { first_name, last_name, email, password, birthday } = req.body;
    const user = await User.update({
        first_name,
        last_name,
        email,
        password,
        birthday
    }, {where:{id}, returning: true}
    )
    return res.json(user[1][0])
})

module.exports = {
    getAll,
    create,
    getOnlyOneUser,
    removeUser,
    updateUser
}