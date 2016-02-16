exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers =  {
  alterContext : function(fn, obj) {
       return fn.call(obj);
  },

  alterObjects : function(constructor, greeting) {
  	 constructor.prototype.greeting = greeting;   
  },

  iterate : function(obj) {
  		var ownProperties = [];
		  for (var prop in obj) {
		    if (obj.hasOwnProperty(prop)) {
		      ownProperties.push(prop + ': ' + obj[prop]);
		    }
		  }
		  return ownProperties;
  }
};
