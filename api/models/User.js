/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

var user = {
  schema:true,
  attributes: {

//      ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
//      ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
//      ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


//      ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
//      ║╣ ║║║╠╩╗║╣  ║║╚═╗
//      ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


//      ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
//      ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
//      ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝
  
    name:{
      type:'string',
      required:true
    },
    email:{
      type:'string',
      required:true,
      unique:true,
      email:true
    },
    password:{
      type:'string',
      minLength: 6,
      required: true,
      //columnName: "encryptedPassword"

    },
  
  
  },
  customToJSON: function() {
    return _.omit(this, ['password']);
  },
  
 datastores:'mongodb'
};
module.exports=user;
