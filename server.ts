const express = require('express')
const app = express()

import cookieSession from 'cookie-session'
const cors = require('cors')

app.use(cookieSession({
    name: 'session',
    keys: [ JSON.stringify(process.env.COOKIE_KEY) ],
    maxAge: 24 * 60 * 60 * 1000
}))

app.use(cors({
    origin: `${process.env.CLIENT_URL}`, 
    credentials: true,
}))

app.get('/', async (req: any, res: { send: (arg0: unknown) => void })=>{
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