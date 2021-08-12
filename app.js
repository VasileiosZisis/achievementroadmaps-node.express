const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('all good')
})

app.listen(3000, () => {
    console.log('Serving port 3000')
})