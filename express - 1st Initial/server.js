const express = require('express');

const app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  console.log('here')
  res.render('index', { text: "world2"})
  
})    

const userRouter = require('./routes/users')
const libRouer = require('./routes/lib')

app.use('/users', userRouter )
app.use('/lib', libRouer)

app.listen(3000)