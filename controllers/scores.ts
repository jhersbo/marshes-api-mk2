let scoresRouter = require('express').Router()

scoresRouter.get('/', async (req: any, res: any)=>{
    try{
        res.send('Get stub')
    }catch(err){
        res.json("error message: " + err)
    }
})

module.exports = scoresRouter