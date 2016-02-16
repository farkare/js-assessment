exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
      return arr.indexOf(item);
  },

  sum : function(arr) {
     var sum = 0;
     //arr.map(function(element){ sum += element});
     sum = arr.reduce(function(a,b){return a+ b});
     return sum;
  },

  remove : function(arr, item) {
    
    for(var i in arr){
        if(arr[i]==item){
            arr.splice(i,1);
        }
    }
     
     return arr;
  },

  removeWithoutCopy : function(arr, item) {
      var index = null;

      while ((index = arr.indexOf(item)) !== -1)
          arr.splice(index, 1);

      return arr;
  },

  append : function(arr, item) {
     arr.splice(arr.length, 1, item);
     return arr;  
  },

  truncate : function(arr) {
     arr.splice(arr.length - 1 , 1);
     return arr;
  },

  prepend : function(arr, item) {
      arr.unshift(item);
      return arr;
  },

  curtail : function(arr) {
      arr.shift();
      return arr;
  },

  concat : function(arr1, arr2) {
      return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
     arr.splice(index, 0, item);
     return arr;
  },

  count : function(arr, item) {
     var count = 0; 
     for(var i=0; i< arr.length; i++){
        if(item == arr[i]){
          count += 1;
        }
     }
     return count;
  },

  duplicates : function(arr) {
      var dup = [];
      var otr = [];
      for(var i=0; i< arr.length; i++){
        if(dup.indexOf(arr[i]) == -1 ){
          dup.push(arr[i]);
        }else{
          if(otr.indexOf(arr[i]) == -1){
            otr.push(arr[i]);
          }
        }
      }
      return otr;
  },

  square : function(arr) {
    var dd = arr.map(function(element){ return element * element});
    return dd;
  },

  findAllOccurrences : function(arr, target) {
     var occr = [];
     for(var i=0; i< arr.length; i++){
        if (arr[i] == target){
            occr.push(i);
        }  
     }
     return occr;
  }
};
