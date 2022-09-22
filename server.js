const express = require('express')
const app = express()

const cookieSession = require('cookie-session')
const cors = require('cors')

app.use(cookieSession({
    name: 'session',
    keys: [ JSON.stringify(process.env.COOKIE_KEY) ],
    maxAge: 24 * 60 * 60 * 1000
}))

// app.use(cors({
//     origin: `${process.env.CLIENT_URL}`, 
//     credentials: true,
// }))

//controllers
app.use('/users', require('./controllers/users'))
app.use('/scores', require('./controllers/scores'))

app.get('/', async (req, res)=>{
    try{
        res.send('Home')
    }
    catch(err){
        res.send(err)
        console.log(err)
    }
})

app.listen(process.env.PORT, ()=>{
    console.log(`Eyes on port ${process.env.PORT}.`)
})