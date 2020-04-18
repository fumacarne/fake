const router = require('express').Router();
const db = require('../models');
const auth = require ('../utils/auth')

router.get('/me', auth.required, async (req,res)=>{
    const user = await db.User.findOne({where:{id: req.auth.user.id}});
    res.json({user})
});


router.post('/login', async (req,res)=>{
    const { email:enteredEmail, password:enteredPassword}= req.body;

    const user = await db.User.findOne({where:{email:enteredEmail}});

    if (!user) res.status(400).json({message:"No user"});
    const isPasswordCorrect = user.checkPassword(enteredPassword);
    if(!isPasswordCorrect)
    res.status(400).json({message: 'Incorrect Pass'});

    const token = user.generateToken();
    res.status(200).json({token,message:'Login OK'})



});



module.exports = router;
