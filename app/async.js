exports = (typeof window === 'undefined') ? global : window;

exports.asyncAnswers = {
  async : function(value) {
      var promise = new Promise(function(resolve, reject) {
	  // do a thing, possibly async, then…

	  if (true) {
	    resolve(value);
	  }
	  else {
	    reject(false);
	  }

	});

    return promise;  
  },

  manipulateRemoteData : function(url) {
  	var promise = $.ajax({
  		url: url
	});
	return promise.then(function(response){
		peopleArray = [];
		for (var person in response.people){
     		 peopleArray.push(response.people[person].name);
    	}
    	return peopleArray.sort(); 
	
	});

  }
};
