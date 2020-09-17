const express = require('express');
const LeaderRouter = express.Router()
const bodyparser = require('body-parser');
LeaderRouter.use(bodyparser.json());
LeaderRouter.route('/')
.all((req,res,next)=>{
    res.statusCode = 200;
    res.setHeader('content-Type','text/plain');
    next();
 })
 .get((req,res,next)=>{
     res.end('Will send all the leaders to you!');
 })
 .put((req,res,next)=>{
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
 })
 .post((req,res,next)=>{
     res.end('will add the leader'+req.body.name+'with details'+req.body.description)
 })
 .delete((req,res,next)=>{
     res.end('deleting all the leaders');
 });
 LeaderRouter.route('/:leadId')
.get((req,res,next) => {
    res.end('Will send details of the leader: ' + req.params.leadId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /leader/'+ req.params.leadId);
})

.put((req, res, next) => {
  res.write('Updating the leader: ' + req.params.leadId + '\n');
  res.end('Will update the leader: ' + req.body.name + 
        ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting leader: ' + req.params.leadId);
});

module.exports = LeaderRouter;