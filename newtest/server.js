const express = require('express')

const app = express()
const PORT = 8000


app.get('/',(req,res)={
    return "Ypu are admin"
})

app.listen((PORT,()=>{
    console.log(`server is running in ${PORT}`)
}))


