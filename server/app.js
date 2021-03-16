const express = require('express');
const mongoose = require('mongoose');
const router  = require('./routes/routes')


const app = express();


app.use(express.json());



mongoose
.connect('mongodb+srv://Vikash_start:Vikashstart@cluster0.vm0yk.mongodb.net/<dbname>?retryWrites=true&w=majority',
  { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('MonogoDB connected.....');
});


app.use('Models', router)

const port =  process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`))