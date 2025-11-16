const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Home Route is Working')
})

app.listen(port, () => {
    console.log(`Marketplace listening on port ${port}`)
})
