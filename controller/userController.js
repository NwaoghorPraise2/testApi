const {Users} = require('../model/User');

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

let createUsers = async (req,res) => {
    try {
        const user = await req.body;
        
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

};