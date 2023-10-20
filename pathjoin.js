// Filename: pathjoin.js
// Timestamp: 2016.01.24-17:13:21 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)

const endsl = /\/$/,
      bgnsl = /^\//,
      updir = /\/?[^\.\/]*\/\.\./,
      cwdir = /\/\.\//
  
export default (...a) => {
  let x = a.length, 
      p = a[x - 1].match(endsl) ? '/' : ''
  
  while (x--) {
    p = (!x || a[x].match(bgnsl) ? '' : '/') + a[x].replace(endsl, '') + p
  }

  while (updir.test(p)) p = p.replace(updir, '')
  while (cwdir.test(p)) p = p.replace(cwdir, '/')
    
  return p
}
