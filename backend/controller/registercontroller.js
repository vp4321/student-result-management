const bcrypt = require('bcrypt')
const User = require('../model/users')


const handlenewuser = async(req,res) => {
    const{user,reg,pwd} = req.body;
    if(!user || !pwd){
        console.log('error');
        return res.status(400).json({'message' : 'missing'})
    }
    const duplicate = await User.findOne({username : user}).exec();// check for dupliactes in mongo
    if(duplicate){
        return res.status(409).json({'message' : 'User already exists'})
    }
    try{
        const hashedpwd = await bcrypt.hash(pwd,10)
        //create and store a new user
        const result = await User.create({
            "name" : user,
            "reg_no" : reg,
            "password" : hashedpwd
        });
        console.log(result);
        res.status(201).json({'success' : `New user ${user} created`})
    }catch(err){
        res.json({'message' : err.message})
    }
}
module.exports = {handlenewuser};