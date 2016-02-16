exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    return parseInt(num.toString(2).split("").reverse()[bit-1]);
  },

  base10: function(str) {
  	return parseInt(str, 2);
  },

  convertToBinary: function(num) {

    var strCopy = function (sourceStr, targetStr) {
      var newStr = sourceStr;
      targetStr = (targetStr > 0) ? targetStr : 1;
      while (--targetStr) {
        newStr += sourceStr;
      }
      return newStr;
    }
    var numbase = num.toString(2);
    var length = 8;
    if (numbase.length !== length) {
      if (numbase.length < length) {
        numbase = strCopy( 0, (length - numbase.length)) + numbase;
      }
    }

    return numbase;
  },

  multiply: function(a, b) {
     var multiplier = 1000000;

     a *= multiplier;
     b *= multiplier;

     return (a * b) / (multiplier * multiplier);
  }
};
