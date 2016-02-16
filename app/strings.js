exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	 var tempstr = [];
     var stArr = str.split("");
     var exTr = {};
     var prev;
     for(var i = 0; i< stArr.length; i++){
        if (typeof exTr[stArr[i]] == 'undefined' || prev != stArr[i]){

            exTr[stArr[i]] = 1;
        }else{
        	exTr[stArr[i]] = exTr[stArr[i]] + 1;
        }
	    prev = stArr[i];
        if(exTr[stArr[i]] <= amount){
        	tempstr.push(stArr[i]);
        }
     }
     return tempstr.join(''); 
  },
  wordWrap: function(str, cols) {

        var ret = [];
        var words = str.split(/\b/);
        var curLine = '';
        var lastWhite = '';
        words.forEach(function(d) {
            var prev = curLine;
            curLine += lastWhite + d;

            var l = curLine.length;

            if (l > cols) {
                ret.push(prev.trim());
                curLine = d;
                lastWhite = '';
            } else {
                var m = curLine.match(/(.*)(\s+)$/);
                lastWhite = (m && m.length === 3 && m[2]) || '';
                curLine = (m && m.length === 3 && m[1]) || curLine;
            }
        });

        if (curLine) {
            ret.push(curLine.trim());
        }

        ret = ret.filter(Boolean);

        return ret.join("\n");
  },
  reverseString: function(str) {
       var temp = [];
       for(var i = str.length; i >= 0; --i){
       	  temp.push(str.charAt(i));
       }
       return temp.join("");
  }
};
