const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path')
const items = require('./routes/api/items')

const app = express();

// BodyParser Middleware
app.use(bodyParser.json());

// MongoDB Connect
const db = require('./config/keys').mongoURI

mongoose.connect(db)
.then( ()=>console.log('MongoDB Connected...') )
.catch(err=>console.log(err))

// Use Routes
app.use('/api/items', items)

if(process.env.NODE_ENV === 'production') {
  // Set static foloder
  app.use(express.static('client/build'));
  app.get('*', (req, res)=>{
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })
}

const port = process.env.PORT || 5000

app.listen(port, ()=>console.log(`Server Run on ${port}`));