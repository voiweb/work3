module.exports = function main(str) {
       var strs = new Array() ;
     strs = str.split(''); 
      var result = 0 ;
     for(var x = 0 ; x<strs.length; x++){
      result = result +  parseInt(strs[x]) ;
 }
  return result ;
};
