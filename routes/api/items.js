const express = require('express')
const router  =express.Router();

// Item model
const Item = require('../../models/Item')

// @route   GET /api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res)=>{
  Item.find()
  .sort({date: -1})
  .then(response=>res.json(response))
  .catch(error=>console.log(error))
})

// @route   POST /api/items
// @desc    Create A Post
// @access  Public
router.post('/', (req, res)=>{
  const newItem = new Item({
    name: req.body.name
  });

  newItem.save()
  .then(item=>res.json(item))
  .catch(error=>console.log(error))
})

// @route   DELETE /api/items/:id
// @desc    DELETE A Post
// @access  Public
router.delete('/:id', (req, res)=>{
  console.log(req.params.id)
  Item.findById(req.params.id)
  .then(item=>item.remove().then(()=>res.json({success:true})))
  .catch(err=>res.status(404).json({success: false}))
})

module.exports = router