// Filename: pathjoin.spec.js  
// Timestamp: 2014.04.18-15:07:35 (last modified)  
// Author(s): Bumblehead (www.bumblehead.com)  

var pathjoin = require('../pathjoin');

describe("pathjoin", function () {

  it("should join `/duck` `/duck` as `/duck/duck`", function () {  
    expect( pathjoin('/duck', '/duck') ).toBe( '/duck/duck' );    
  });

  it("should join `/duck` `/duck` `/duck` `/duck` as `/duck/duck/duck/duck`", function () {  
    expect( pathjoin('/duck', '/duck', '/duck', '/duck') ).toBe( '/duck/duck/duck/duck' );    
  });

  it("should join `duck` `duck` as `/duck/duck`", function () {  
    expect( pathjoin('duck', 'duck') ).toBe( 'duck/duck' );    
  });

  it("should join `duck` `` as `duck/`", function () {  
    expect( pathjoin('duck', '') ).toBe( 'duck/' );    
  });

  it("should join `` `duck` as `/duck`", function () {  
    expect( pathjoin('', 'duck') ).toBe( '/duck' );    
  });

});

