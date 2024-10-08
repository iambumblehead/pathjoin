// Filename: pathjoin.spec.js  
// Timestamp: 2016.01.24-17:14:21 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)  

import test from 'node:test'
import assert from 'node:assert/strict'
import pathjoin from './pathjoin.js'

test("should join `/duck/` `/duck` as `/duck/duck`", () => {
  assert.strictEqual(pathjoin('/duck', '/duck'), '/duck/duck');    
});

test("should join `/duck` `/duck` as `/duck/duck`", () => {  
  assert.strictEqual(pathjoin('/duck', '/duck'), '/duck/duck');    
});

test("should join `/duck` `/duck` `/duck` `/duck` as `/duck/duck/duck/duck`", () => {  
  assert.strictEqual(pathjoin('/duck', '/duck', '/duck', '/duck'), '/duck/duck/duck/duck');    
});

test("should join `duck` `duck` as `/duck/duck`", () => {  
  assert.strictEqual(pathjoin('duck', 'duck'), 'duck/duck');    
});

test("should join `duck` `` as `duck/`", () => {  
  assert.strictEqual(pathjoin('duck', ''), 'duck/');    
});

test("should join `` `duck` as `/duck`", () => {  
  assert.strictEqual(pathjoin('', 'duck'), '/duck');    
});

test("should join `/duck/duck/` `./duck` as `/duck/duck/duck`", () => {  
  assert.strictEqual(
    pathjoin('/duck/duck/', './duck'), '/duck/duck/duck');    
});

test("should join `/duck/duck/` `../duck` as `/duck/duck`", () => {  
  assert.strictEqual(
    pathjoin('/duck/duck/', '../duck'), '/duck/duck');    
});

test("should join `/duck/duck/` `.././goose` as `/duck/goose`", () => {  
  assert.strictEqual(
    pathjoin('/duck/duck/', '.././goose'), '/duck/goose');    
});  

test("should join `/duck/duck/duck` `../../duck` as `/duck/duck`", () => {  
  assert.strictEqual(
    pathjoin('/duck/duck/duck', '../../duck'), '/duck/duck');    
});  
