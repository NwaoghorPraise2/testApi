const {Users} = require('../model/User');
const {v4: uuid} = require('uuid');

//get all users
let getUsers = async (req, res) => {
    try {
        const users = Users;
        res.status(200).json({
         message:'Hey',
         user : users
    });
    } catch (err){
        res.status(500).json({ message: err});
    }
};

//get single user

let getUser = async (req, res) => {
    try {
        let id = await req.params.id;
        const foundUser = Users.find((user) => id === user.id);
        res.status(200).json ({
            message:`User FOUND`,
            foundUser
        });
    } catch (err) {
        console.log(err.message);
    }
};

//Post Request to created user
let createUsers = async (req, res) => {
    try {
        const { name, email } = await req.body;
        const newUser = {
            id: uuid(),
            name,
            email
        };
        
        Users.push(newUser);
        res.status(200).json({
            message:'User Created',
            newUser
        });
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};


//update /edit user 

let updateUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        const { name, email } = await req.body;
        user.name = name;
        user.email = email;
        res.status(200).json({
            message: 'User Updated',
            user
        });
    } catch (error) {
        res.status(500).json({message: err.message});
    }
};

//Delete User
let deleteUser = async (req, res) => {
    try {
        let id = req.params.id;
        const user = User.find((user) => user.id === id);
        Users.splice(Users.indexOf(user), 1);
        res.status(200).json({
            message: "user don delete",
            user
        });
    } catch (err) {
        res.status(500).json({ message: err.message});
    }
};

module.exports = {
    getUsers,
    createUsers,
    getUser,
    updateUser,
    deleteUser
};