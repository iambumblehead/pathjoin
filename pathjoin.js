// Filename: pathjoin.js
// Timestamp: 2016.01.24-17:13:21 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)

var pathjoin = module.exports = (function () {
  var endsl = /\/$/,
      bgnsl = /^\//,
      updir = /\/?[^\.\/]*\/\.\./,
      cwdir = /\/\.\//;
  
  return function () {
    var a = arguments, 
        x = a.length, 
        p = a[x - 1].match(endsl) ? '/' : '';

    while (x--) {
      p = (!x || a[x].match(bgnsl) ? '' : '/') + a[x].replace(endsl, '') + p;
    }

    while (updir.test(p)) p = p.replace(updir, '');
    while (cwdir.test(p)) p = p.replace(cwdir, '/');
    
    return p;
  };

}());
