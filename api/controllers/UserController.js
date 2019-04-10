/**
 * UserController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
const jwt=require('jsonwebtoken');
module.exports = {
  
'createUser':function(req,res,next){
     var name=req.query.name;
      var email=req.query.email;
       var password=req.query.password;
       User.create({name:name,email:email,password:password}).exec(function (err,user) {
        if(err){
            res.send(500, { error: "DATABASE ERROR" });
        }
        jwt.sign({user},'secretkey',(err,token)=>{
            res.json({
                token
            });
        });
       });

},
'deleteUser':function(req,res,next){
     //console.log(req);
    User.destroy({id:req.params.id}).exec(function(err){
        if(err){
            res.send(500, { error: "DATABASE ERROR" });
        }
        res.send("done");
    });
},
'showUser':function(req,res,next){
User.find({id:req.params.id}).exec(function(err,user){
if(err){
    res.send(500, { error: "DATABASE ERROR" });
}
return res.json(user);
});
},
'updateUser':function(req,res,next){
   // console.log(req);
   var name=req.query.name;
      var email=req.query.email;
       var password=req.query.password;
       User.update({id:req.params.id},{name:name,email:email,password:password}).exec(function(err){
        if(err){
            res.send(500, { error: "DATABASE ERROR" });
        }
        return res.send('done');
       })

}
};

