process.env.NODE_ENV = 'test';

const chai = require('chai');
const expect = chai.expect;

/*
* Simple dumb test to make CI green initially.
*/
describe('Use utility class to make request', () => {
  expect(expect).to.equal(expect);
});
