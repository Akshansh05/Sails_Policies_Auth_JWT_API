/**
 * DeviceController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
module.exports = {
  'createDevice':function(req,res,next){
    var name=req.query.name;
    var type=req.query.type;
    var location=req.query.location;
    Device.create({name:name,type:type,location:location}).exec(function(err){
        if(err) {
            res.send(500, { error: "DATABASE ERROR" });
        }
        res.send('done');
    });
  },
'showDevice':function(req,res,next){
    Device.find({id:req.params.id}).exec(function(err,device){
        if(err){
            res.send(500, { error: "DATABASE ERROR" });  
        }
        return res.json(device);
    });
},
'updateDevice':function(req,res,next){
    var name=req.query.name;
    var type=req.query.type;
    var location=req.query.location;
    Device.update({id:req.params.id},{name:name,type:type,location:location}).exec(function(err){
        if(err){
            res.send(500, { error: "DATABASE ERROR" });   
        }
        return res.send('done'); 
    });
},
'deleteDevice':function(req,res,next){
    Device.destroy({id: req.params.id}).exec(function(err){
        if(err){
            res.send(500, { error: "DATABASE ERROR" });   
        }
        res.send('done'); 
    });
}
};

