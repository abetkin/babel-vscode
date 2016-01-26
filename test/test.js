const {assert} = require('chai')

describe('User', () => {
  describe('action', () => {
    it('should term without error', (done) => {
      var a = 0
      var b = a + 1
      debugger
      console.log(b)
      assert.ok(b)
      done()
    });
  });
});
