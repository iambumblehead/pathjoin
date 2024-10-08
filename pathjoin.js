// Filename: pathjoin.js
// Timestamp: 2016.01.24-17:13:21 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)

const sl = '/',
      slcharcode = 47,
      updir = /\/?[^\.\/]*\/\.\./,
      cwdir = /\/\.\//

export default (...a) => {
  let x = a.length,
      b = a[x - 1],
      p = b.charCodeAt(b.length - 1) === slcharcode ? sl : ''

  while (x--) {
    b = a[x]
    p = (!x || b.charCodeAt(0) === slcharcode ? '' : sl) + (
      b.charCodeAt(b.length - 1) === slcharcode ? b.slice(0, -1) : b
    ) + p
  }

  while (updir.test(p)) p = p.replace(updir, '')
  while (cwdir.test(p)) p = p.replace(cwdir, sl)

  return p
}
