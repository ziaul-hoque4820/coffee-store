const express = require('express');
const cors = require('cors');
require('dotenv').config()

const app = express();
const port = process.env.PORT || 3000;


// middleware
app.use(cors());
app.use(express.json());





app.get('/', (req, res) => {
    res.send('Coffee server is run successfully')
})

app.listen(port, () => {
    console.log(`Coffee server is running on port ${port}`)
})