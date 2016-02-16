exports = (typeof window === 'undefined') ? global : window;

exports.regexAnswers = {
  containsNumber : function(str) {
      return str.match(/\d+/g) ? true : false;
  },

  containsRepeatingLetter : function(str) {
    var patt1 = /(\D)\1*/g;
    var result = str.match(patt1);
    var found =  false;

    for(var i = 0; i < result.length; i++){
         if(result[i].length > 1){
           found = true;
           break;
         }
    }

    return found;
  },

  endsWithVowel : function(str) {
    return str.match(/[a,e,i,o,u]$/i) ? true : false;
  },

  captureThreeNumbers : function(str) {
    var result = str.match(/\d{3}/);
    return  result ? result[0] : false;
  },

  matchesPattern : function(str) {
    return str.match(/^\d{3}-\d{3}-(\d{4})$/) ? true : false;
  },
  isUSD : function(str) {
    return str.match(/^\$\d+((,\d{3})+)?(\.?\d{2})?$/) ? true : false;
  }
};
