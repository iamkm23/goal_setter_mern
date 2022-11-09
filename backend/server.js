require('dotenv').config()
const express = require('express')

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

// route
app.use('/api/v1/goals', require('./routes/goalRoutes'))


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is listening at ${port}`)
})
