const express = require('express')
const bodyParser = require('body-parser');
const path = require('path')
const swaggerjsdoc = require('swagger-jsdoc')
const swaggerui = require('swagger-ui-express')
const cors = require('cors')
require('dotenv').config()


const app = express()

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
//Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

app.use('/api/event', require('./routes/eventRoutes'))
app.use('/api/hotel', require('./routes/hotelRoutes'))
app.use('/api/point', require('./routes/pointsRoutes'))
app.use('/api/travel', require('./routes/travelRoutes'))
app.use('/api/news', require('./routes/newsRoutes'))
app.use('/api/position', require("./routes/positonRoute"))
app.use('/api/user', require('./routes/userRoutes'))


const options = {
    definition:{
        openapi:"3.0.0",
        info:{
            title:"Navoi travel api doc",
            version: "0.1"
        },
        servers:[
            {
                url:"https://navoi-travel.onrender.com/api"
            },
            {
                url:"http://localhost:5000/api/"
            },
        ]
    },
    apis: ["./routes/*.js"],
}

const spacs = swaggerjsdoc(options)
app.use('/api-docs', swaggerui.serve, swaggerui.setup(spacs))
const PORT = process.env.PORT || 5000
app.listen(PORT, console.log(`Server listening on port: ${PORT}`))