import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

import userRoutes from './routes/users.js' //in node we need .js t use
import questionRoutes from './routes/Questions.js'
import answerRoutes from './routes/Answers.js'
// when one server talks to another it will throw an error that is cost.
const app = express();      // started the server
app.use(express.json({limit: "30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());
dotenv.config()

app.get('/',(req, res) => {
    res.send("This is a stack overflow clone API")
})

app.use('/user', userRoutes) // to check url is localhost:5000/users/login or ../users/signup
app.use('/questions', questionRoutes) // to check url is localhost:5000/users/login or ../users/signup
app.use('/answer', answerRoutes)
const PORT = process.env.PORT || 5000
// Atlas is cloud storage for MongoDB

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
    .catch((err) => console.log(err.message))

