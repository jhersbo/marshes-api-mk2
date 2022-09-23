let router = require('express').Router()
let db = require('../models')
let { scores, users } = db
const { Op } = require("sequelize");


//get users' previous scores
//get top 10 scores
//post a score
//dont need to delete ever?

//previous scores
router.get('/', async (req, res)=>{
    try{
        let foundScores = await scores.findAll()
        res.json(foundScores)
    }catch(err){
        res.status(500).json({error_message: err, test: "sumpin wrong"})
    }
})

module.exports = router