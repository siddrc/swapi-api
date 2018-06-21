console.log("Starting server...")
const express = require("express")
const cors = require('cors')
const app = express()
app.use(cors())
const appConstants = require("./modules/appconstants.json")
const PORT = appConstants["PORT"]
app.listen(PORT)
const StarWarsAPIReqHandler = require("./modules/starwarsapireqhandler")
app.use('/starwars/api',StarWarsAPIReqHandler.getRouter())
app.use('/', express.static(__dirname + '/public'));
app.use('/', welcomePageAction);
console.log(`Server started at localhost ${PORT}`)
