exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
      var counter = start;
      var interval = setInterval(function(){ if(counter == end){  clearInterval(interval); }else{ counter++;} }, 100); 

      this.cancel =  function(){
      	clearInterval(interval);
      } 
      return this;  
  }
};
