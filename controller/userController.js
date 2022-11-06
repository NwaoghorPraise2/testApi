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

let getUser = async (req, res) =>{
    try {
        let id = req.params.id;
        const user = Users.find((user) => user.id === id);
        res.status(200).json ({
            message:'User FOUND',
            user
        });
    } catch (err) {
        console.log(err.message);
        
    }

}

let createUsers = async (req,res) => {
    try {
        const user = await req.body;
        
        user.id = uuid();
        
        Users.push(user);
        
        res.status(200).json({
            message:'User Created',
            user
        });
    } catch (err){
        res.status(500).json({
            message: err.message
        });
    }
};


module.exports = {
    getUsers,
    createUsers,
    getUser

};