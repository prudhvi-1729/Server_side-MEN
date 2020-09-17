const express = require('express');
const bodyparser = require('body-parser');
const promoRouter = express.Router()
promoRouter.use(bodyparser.json());
promoRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-Type','text/plain');
    next();
 })
 .get((req,res,next)=>{
     res.end('Will send all the promotions to you!');
 })
 .put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotions');
 })
 .post((req,res,next)=>{
     res.end('will add the promotion'+req.body.name+'with details'+req.body.description)
 })
 .delete((req,res,next)=>{
     res.end('deleting all the promotions');
 });
 promoRouter.route('/:promId')
.get((req,res,next) => {
    res.end('Will send details of the promotion: ' + req.params.promId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /promotions/'+ req.params.promId);
})

.put((req, res, next) => {
  res.write('Updating the promotion: ' + req.params.promId + '\n');
  res.end('Will update the promotion: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promId);
});

module.exports = promoRouter;

