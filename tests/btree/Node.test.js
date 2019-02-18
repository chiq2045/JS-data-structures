const Chai = require('chai');
const Node = require('../../src/btree/Node.js');
const expect = Chai.expect;

describe('Node', function() {
    let node;

    beforeEach(function() {
        node = new Node(5);
    });

    it('should have a left property', function() {
        expect(node).to.have.property('left');
        expect(node.left).to.be.null;
    });

    it('should have a right property', function() {
        expect(node).to.have.property('right');
        expect(node.right).to.be.null;
    });

    it('should have a value property', function() {
        expect(node).to.have.property('value');
        expect(node.value).to.equal(5);
    });
});