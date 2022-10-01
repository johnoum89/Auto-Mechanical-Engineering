const express = require( 'express' )
const app = express()
//const userRouter = require('./resources/user/user.controller')
const connect = require('./utilities/connect')

const middleware = require('./utilities/middleware')

const PORT = 3003

app.use(express.json())
app.use(middleware.requestLogger)


try {
	connect() // Invoking the connect function
	console.log('connected to MongoDB')
} catch (error) {
	console.log('error connection to MongoDB:', error.message)
}

//app.use('/api/user/', userRouter)

app.use(middleware.unknowEndpoint)


app.listen(PORT, () => {
	console.log(`Example app listening on port ${PORT}`)
})
  
  
  
  
  
  
  
  
