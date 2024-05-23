import express from 'express'
const app = express()
//http methos get post  put patch delete

app.get("/",(req, res,next)=>{
 res.json({message:"welcome to kailash"})
})
export default app;