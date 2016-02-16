exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers =  {
  count : function (start, end) {
    var interval;
    var counter = function  () {
      console.log(start++);

      if (start <= end) {
        interval = setTimeout(counter, 100);
      }
    }

    counter();

    return {
      cancel : function () {
        interval && clearTimeout(interval);
      }
    };
  }
};
