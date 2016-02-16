exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    return fn(arr[0],arr[1],arr[2]);
  },

  speak : function(fn, obj) {
     this.name = obj.name;
     this.greeting = obj.greeting;
     this.foo = fn;
     return this.foo();
  },

  functionFunction : function(str) {
     return function(arg){ return (str + ", " + arg); };
  },

  makeClosures : function(arr, fn) {
    var temp = [];
    for(var i=0; i < arr.length; i++){
      var item = arr[i];
      temp.push(function(){ return fn(item);});
    }
    
    return temp;
  },

  partial : function(fn, str1, str2) {
    return function(str){ return fn(str1,str2,str);};
  },

  useArguments : function() {
      var sum = 0;
      for (var i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
      }
     return sum;
  },

  callIt : function(fn) {
    if(arguments.length == 3){
      return fn(arguments[1],arguments[2]);
    }
    if(arguments.length == 4){
      return fn(arguments[1],arguments[2],arguments[3]);
    }
  },

  partialUsingArguments : function(fn) {
      var parentArguments = arguments;
       if(parentArguments.length == 1){
          return function(){ 
              return fn(arguments[0],arguments[1],arguments[2]); 
          }; 
       }
      if(parentArguments.length == 2){
          return function(){ 
              return fn(parentArguments[1],arguments[0],arguments[1]); 
          };
      }
      if(parentArguments.length == 3){
          return function(){ 
              return fn(parentArguments[1],parentArguments[2],arguments[0]); 
          };
      }
      if(parentArguments.length == 4){
          return function(){ 
              return fn(parentArguments[1],parentArguments[2],parentArguments[3]); 
          };
      }
  },

  curryIt : function(fn) {
      return function(a){  
        return function(b){
          return function(c){
            return fn(a,b,c);
          };
        };
      };
  }
};
