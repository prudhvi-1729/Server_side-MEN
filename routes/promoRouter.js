const express = require('express');
const bodyparser = require('body-parser');
const promoRouter = express.Router()
promoRouter.use(bodyparser.json());
var Promotions = require('../models/promotions');
promoRouter.route('/')
 .get((req,res,next)=>{
     Promotions.find({})
     .then((promo)=>{
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(promo);
     },(err)=>next(err))
     .catch((err)=>next(err))
 })
 .put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
 })
 .post((req,res,next)=>{
    Promotions.create(req.body)
    .then((promo)=>{
        console.log('promotions created');
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(promo);
     },(err)=>next(err))
     .catch((err)=>next(err))
})
 .delete((req,res,next)=>{
    Promotions.remove({})
     .then((promo)=>{
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(promo);
    },(err)=>next(err))
    .catch((err)=>next(err))
 });

 promoRouter.route('/:promId')
.get((req,res,next) => {
    Promotions.findById(req.params.promId)
    .then((promo)=>{
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(promo);
    },(err)=>next(err))
    .catch((err)=>next(err))
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promId);
})

.put((req, res, next) => {
    Promotions.findByIdAndUpdate(req.params.promId,{
        $set:req.body
    })
    .then((promo)=>{
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(promo);
    },(err)=>next(err))
    .catch((err)=>next(err))
})

.delete((req, res, next) => {
    Promotions.findByIdAndRemove(req.params.promId)
    .then((promo)=>{
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(promo);
    },(err)=>next(err))
    .catch((err)=>next(err))
});

module.exports = promoRouter;

