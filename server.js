const express = require('express')
const app = express()
const methodOveride = require('method-override')
const logger = require('morgan')
const routes = require('./routes/index')




app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(methodOveride('_method'))

app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'))
app.use(logger('dev'))


app.use('/', routes)




// add requests here
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
});






