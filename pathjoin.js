// Filename: pathjoin.js
// Timestamp: 2015.12.20-00:33:49 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)

var pathjoin = module.exports = (function (j) {
  
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
