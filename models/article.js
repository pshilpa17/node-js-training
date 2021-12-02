const article = require('../datastore/articles.json')

let Articles={}

Articles.getAll = () =>{
    return article
}

module.exports = Articles