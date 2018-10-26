const bodyParser = require('body-parser')

module.exports = app => {
    app.use(bodyParser.json())
}

//TODO add mock json