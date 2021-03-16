const express = require('express');
const router = express.Router();
const Models = require('../models/model')

router.get('/', async(req, res) => {
    try{
        const model = await Models.find()
        res.json(model)
    }catch(err){
        res.send("Error", err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        const model = await Models.findById(req.params.id)
        res.json(model)
    }catch(err){
        res.send("Error", err)
    }
})

router.post('/api/todo', async(req, res) => {
    const model = new Models({
        todoItems: req.body.todoItems
    })

    try{
        const a = await model.save()
        res.json(a)
    }catch(err){
        res.send("Error", err)
    }

})

module.exports = {router}