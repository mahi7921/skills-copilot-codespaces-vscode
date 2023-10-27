// Create web server 
// 1. Load modules
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
// 2. Create an instance of express
const app = express()
// 3. Setup your application
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
// 4. Define your endpoints/route handlers
app.get('/posts/:id', (req, res) => {
    res.send(
        {
            message: 'Hello world!'
        }
    )
})
// 5. Start your server
app.listen(process.env.PORT || 8081)