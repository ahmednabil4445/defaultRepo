const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')



mongoose.connect('mongodb://0.0.0.0:27017/traditionalProject').then(() => {
    console.log('db connection established');
})
// .catch((err)=>{
//     console.log(err);
// })

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))