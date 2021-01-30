const Posts = require('./../models/posts')

function getAll () {
  return Posts.find({})
}

function create (date, lastName, name, picUrl, savedPost, tags, text, title) {
  return Posts.create({ date, lastName, name, picUrl, savedPost, tags, text, title })
}

function deleteById (id) {
  return Posts.findByIdAndDelete(id)
}

module.exports = {
  getAll,
  create,
  deleteById,
  
}
