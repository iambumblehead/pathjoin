// Filename: pathjoin.js
// Timestamp: 2014.04.18-15:08:19 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)

var pathjoin = ((typeof module === 'object') ? module : {}).exports = (function (j) {
  
  j = function () {
    var a = arguments, 
        x = a.length, 
        p = a[x - 1].match(/\/$/) ? '/' : '';

    while (x--) {
      p = (!x || a[x].match(/^\//) ? '' : '/') + a[x].replace(/\/$/, '') + p;
    }
    return p;
  };

  j.join = j;

  return j;

}());
