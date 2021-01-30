
const express = require('express')
const posts = require('./../usecases/posts')
//const authMiddleware = require('../middlewares/auth')

const router = express.Router()

router.get('/', async (request, response) => {
  const allPosts = await posts.getAll()

  response.json({
    success: true,
    data: allPosts
  })
})

router.post('/', async (request, response) => {
  console.log('Request Body:', request.body)
  console.log('Request:', request)
  const { date, lastName, name, picUrl, savedPost, tags, text, title } = request.body
  const postCreated = await posts.create(date,lastName,name,picUrl,savedPost,tags,text,title)
  
  response.json({
    success: true,
    data: postCreated
  })
})

router.delete('/:id', async (request, response) => {
  const postDeleted = await posts.deleteById(request.params.id)

  response.json({
    success: true,
    data: postDeleted
  })
})

module.exports = router