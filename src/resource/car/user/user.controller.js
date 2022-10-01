const { response } = require('express')
const Users = require('./user.modedl')
  
 app.get('/api/users/:id', (req, res) =>{
    const id = req.params.id
    const user = Users.findById(id)
    if( !user ) {
        response.status(404).json( {
            error: 'user not found!'
        })
  }
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