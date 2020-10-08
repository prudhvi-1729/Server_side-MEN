const express = require('express');
const LeaderRouter = express.Router()
const bodyparser = require('body-parser');
LeaderRouter.use(bodyparser.json());
var Leaders = require('../models/leaders');
LeaderRouter.route('/')
 .get((req,res,next)=>{
    Leaders.find({})
     .then((lead)=>{
         res.statusCode=200;
         res.setHeader('content-Type','application/json');
         res.json(lead);
    },(err)=>next(err))
    .catch((err)=>next(err))
 })
 .put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
 })
 .post((req,res,next)=>{
    Leaders.create(req.body)
    .then((lead)=>{
        console.log('leaders created');
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(lead);
   },(err)=>next(err))
   .catch((err)=>next(err))
})
 .delete((req,res,next)=>{
    Leaders.remove({})
    .then((lead)=>{
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(lead);
   },(err)=>next(err))
   .catch((err)=>next(err))
 });

 LeaderRouter.route('/:leadId')
.get((req,res,next) => {
    Leaders.findById(req.params.leadId)
    .then((lead)=>{
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(lead);
   },(err)=>next(err))
   .catch((err)=>next(err))
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leader/'+ req.params.leadId);
})

.put((req, res, next) =>{
    Leaders.findByIdAndUpdate(req.params.leadId,{
        $set:req.body
    })
    .then((lead)=>{
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(lead);
   },(err)=>next(err))
   .catch((err)=>next(err))
})

.delete((req, res, next) => {
    Leaders.findByIdAndRemove(req.params.leadId)
    .then((lead)=>{
        res.statusCode=200;
        res.setHeader('content-Type','application/json');
        res.json(lead);
   },(err)=>next(err))
   .catch((err)=>next(err))
});

module.exports = LeaderRouter;