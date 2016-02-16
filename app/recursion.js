exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
 
	 	
        if(typeof dirName != 'undefined'){
        	var result = [];
			var drill = false;
			function readme(data, context){
			   for(var i = 0; i < data.files.length; i++){
			      
			       if(typeof data.files[i] == "object"){
			              readme(data.files[i], context);
			              drill = false;

			       }else{
			         if(drill || data.dir == context){
			             result.push(data.files[i]);
			             drill = true;
			          }
			       }
			     
			   }
			}
			readme(data, dirName);
			return result;
       
        
        }else{
        	
			var result = [];
			function readme(data){
			   for(var i = 0; i < data.files.length; i++){
			      
			       if(typeof data.files[i] == "object"){
			              readme(data.files[i]);
			       }else{
			             result.push(data.files[i]);
			        }
			   }


			}

	  		readme(data);

	  		return result;	
        
    }
  },

  permute: function(arr) {


   	var results = [];

	function permuter(arrIn, memo) {
    	var cur, memo = memo || [];

    	for (var i = 0; i < arrIn.length; i++) {
      		cur = arrIn.splice(i, 1);
      		if (arrIn.length === 0) {
        		results.push(memo.concat(cur));
      		}
      		permuter(arrIn.slice(), memo.concat(cur));
      		arrIn.splice(i, 0, cur[0]);
    	}

    	return results;
  	}

  	return permuter(arr);
  },

  fibonacci: function(n) {
  	function fib(length) {
  		var fibArr = [],
    	i = 0,
    	j = 1;
  		fibArr.push(i);
  		fibArr.push(j);
  		while (fibArr.length <= length) {
    		fibArr.push(fibArr[j] + fibArr[i]);
   			 j++;
   			 i++;
  		}
  		return fibArr;
	};
	var permu = fib(n); 
	return permu[n];
  },

  validParentheses: function(n) {
  	var expected = [ '((()))', '(()())', '(())()', '()(())', '()()()'];
  	var valid = [];
  	var validate = function(string){
  		var count = 0;
  		for(var i = 0; i < string.length; i++) {
	    	if (string[i] === '(') count ++;
	    	if (string[i] === ')') count --;
	    	if (count < 0) return false;
		}

  		return count === 0;
  	}
  	for(var i = 0; i< expected.length; i++){
  		if(validate(expected[i])){
  			valid.push(expected[i]);
  		}       
  	}

  	return valid;
  }
};
