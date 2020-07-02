var express = require('express');
var promoRouter  = express.Router();

promoRouter.route('/')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send promotions to you!');
})

.post(function(req, res, next){
    res.end('Will add promotion: ' + req.body.name + ' with details: ' + req.body.description);    
})

.delete(function(req, res, next){
        res.end('Deleting promotions');
});

promoRouter.route('/:promoId')
.all(function(req,res,next) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      next();
})

.get(function(req,res,next){
        res.end('Will send details of promotion: ' + req.params.promoId );
})

.put(function(req, res, next){
        res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
            ' with details: ' + req.body.description);
})

.delete(function(req, res, next){
        res.end('Deleting promotion: ' + req.params.promoId);
});

module.exports = promoRouter;
