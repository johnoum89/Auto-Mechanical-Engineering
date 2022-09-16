require('dotenv').config()
const mongoose = require ('mongoose')


const express = require('express')
const app = express()
const port = process.env.PORT

const middleware = require('./utilities/middleware')

app.use(express.json())
app.use(middleware.requestLogger)

 const URI = process.env.MONGODB_URI

 const connect = () => {
  return mongoose.connect(
    URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: false
    }
  )
 }


 try {
  connect()
  
   console.log('connected to mongoDB');

} catch (error) {
  console.log('error connection to MongoDB:', error. message);
}

//  mongoose.conn
 

const users = [
  {
    id: 1,
    username:'johmoum',
    phone:'5436457',
    password:'eda1233',
  },
  {
    id: 2,
    username:'ida',
    phone:'546575',
    password:'123ad',
  }
]

app.get('/', (req, res) => {
  res.send('Auto Mechanical Engineer')
})

app.get('/me', (req, res) => {
    res.json(me)
})

app.get('/api/users/:id', (req, res) =>{
  const id = req.params.id
  const user = users.find((user) => user.id === Number(id))
  res.json(user)
})

app.get("/api/users/:id", (req , res) => {
  res.json(users)
})

app.delete("/api/user/:id" , (req, res) => {
  const id = req.params.id
  users = users.filter((u) => u.id !== Number(id))
  res.status(204).end()
})
// end here



app.post('/api/users', (req, res) => {
  const content = req.body
  // how we can add a new user to our system

  console.log(content);
  res.json(content)
})

app.put('/api/users/:id', (req, res) => {
  const id = req.params.id

  res.id
})

app.use(middleware.unknowEndpoint)



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
