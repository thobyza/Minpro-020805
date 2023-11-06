const express = require("express")
const PORT = 2000;
const db = require('./models')
const cors = require('cors')

const app = express();
app.use(express.json());
app.use('/public', express.static('./public'))

app.use(cors())

app.use("/api", (req, res) => {
    res.send("This is my API")
})

// 
const { eventRouter } = require('./routers')
const { categoryRouter } = require('./routers')
app.use('/events', eventRouter)
app.use('/event-category', categoryRouter)

app.listen(PORT, () => {
    // db.sequelize.sync({ alter: true })
    console.log(`Server running on ${PORT}`);
})
