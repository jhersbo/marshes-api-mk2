let scoresRouter = require('express').Router()
let db = require('../models')
let { scores, users } = db


//get users' previous scores
//get top 10 scores
//post a score
//dont need to delete ever?

//previous scores
scoresRouter.get('/', async (req, res)=>{
    try{
        let foundScores = await scores.findAll({
            where: {
                user_id: req.body.user_id
            },
        })
        if(foundScores){
            res.status(200).json(foundScores)
        }else{
            res.status(200).json("user has no scores")
        }
    }catch(err){
        res.status(500).json({error_message: err, test: "sumpin wrong"})
    }
})

module.exports = scoresRouter