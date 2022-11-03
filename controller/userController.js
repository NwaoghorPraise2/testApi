const Users = require('../model/User');


exports.getUsers = async (req, res) => {
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


