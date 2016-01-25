// Filename: pathjoin.spec.js  
// Timestamp: 2016.01.24-17:14:21 (last modified)
// Author(s): Bumblehead (www.bumblehead.com)  

var pathjoin = require('../');

describe("pathjoin", function () {
  
  it("should join `/duck/` `/duck` as `/duck/duck`", function () {  
    expect( pathjoin('/duck', '/duck') ).toBe( '/duck/duck' );    
  });
  
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

  it("should join `/duck/duck/` `./duck` as `/duck/duck/duck`", function () {  
    expect(
      pathjoin('/duck/duck/', './duck')
    ).toBe( '/duck/duck/duck' );    
  });    

  it("should join `/duck/duck/` `../duck` as `/duck/duck`", function () {  
    expect(
      pathjoin('/duck/duck/', '../duck')
    ).toBe( '/duck/duck' );    
  });

  it("should join `/duck/duck/` `.././goose` as `/duck/goose`", function () {  
    expect(
      pathjoin('/duck/duck/', '.././goose')
    ).toBe( '/duck/goose' );    
  });  
  
  it("should join `/duck/duck/duck` `../../duck` as `/duck/duck`", function () {  
    expect(
      pathjoin('/duck/duck/duck', '../../duck')
    ).toBe( '/duck/duck' );    
  });  


});

