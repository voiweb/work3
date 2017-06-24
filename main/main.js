module.exports = function main(str) {
     var strs = new Array() ;
     strs = str.split("");
      var result = 0 ;
     for(x in strs){
      result +=  parseInt(x) ;
 }
  return result ;
};
