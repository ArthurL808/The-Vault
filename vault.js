'use strict';
module.exports = function() {
    let vault = {};

  function setValue (key,value){
    vault[key] = value;
  }
  function getValue (key){
      if(vault[key]){
          return vault[key]
      }else{
          return null;
      }
  }
  return{
      setValue,
      getValue
  }
};