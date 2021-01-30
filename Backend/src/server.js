
const express = require('express')
const cors = require('cors')
const postsRouter = require('./routes/posts')
//const authRouter = require('./routes/auth')
const server = express()

server.use(cors())
server.use(express.json()) // Middleware
server.use('/posts', postsRouter)
//server.use('/auth', authRouter)

server.get('/', (request, response) => {
  response.json({
    success: true,
    message: 'PostsAPIV10'
  })
})

module.exports = server
