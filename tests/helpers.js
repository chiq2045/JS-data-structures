const _ = require('lodash');

module.exports = function chaiHelpers(chai, utils) {
    const Assertion = chai.Assertion;

    Assertion.addMethod('structuredAsList', function(values) {
        if( !values.length ) {
            this.assert(
                this._obj.head === null,
                'expected #{this} to have "head" property set to null',
                'expected #{this} to not have "head" property set to null'
            );
            return;
        }

        let expected = 'head-->';
        values.forEach((v) => {
            expected += v + '-->';
        });
        expected += 'null';

        let actual = 'head-->';
        let traveler = this._obj.head;
        while(traveler !== null) {
            actual += traveler.value + '-->';
            traveler = traveler.next;
        }
        actual += 'null';

        this.assert(
            expected === actual,
            'expected #{this} to be internally structured like #{exp} but instead it was structed liked #{act}',
            'expected #{this} to not be internally structured like #{exp}',
            expected,
            actual
        );
    });

    Assertion.addMethod('structuredAsTree', function(tree) {
        if( !tree ) {
            this.assert(
                this._obj.root === null,
                'expected #{this} to have "root" property set to null',
                'expected #{this} to not have "root" property set to null'
            );
            return;
        }

        this.assert(
            recursiveMatch(tree.root, this._obj.root),
            'expected #{this} to be internally structured like #{exp} but instead it was structed liked #{act}',
            'expected #{this} to not be internally structured like #{exp}',
            tree.root,
            this._obj.root
        );

        function recursiveMatch(expNode, actNode) {
            if( expNode === null && actNode === null ) {
                return true;
            }

            if( expNode === null || actNode === null ) {
                return false;
            }

            if( expNode.value !== actNode.value ) {
                return false;
            }

            return recursiveMatch(expNode.left, actNode.left) && recursiveMatch(expNode.right, actNode.right);
        }
    });

    Assertion.addMethod('matchEither', function(a, b) {
        let matchesA = _.isEqual(this._obj, a);
        let matchesB = _.isEqual(this._obj, b);

        this.assert(
            matchesA || matchesB,
            'expected tree to be printed as #{exp} OR #{act} but instead it was #{this}',
            'expected tree to not be printed as #{exp} OR #{act}',
            a,
            b,
            false
        );
    });
};