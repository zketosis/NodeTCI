const expect = require('chai').expect
const server = require('../index');

describe('test', () => {
  it('should return a string', () => {
    expect('q with travis').to.equal('q with travis');
  });
});
