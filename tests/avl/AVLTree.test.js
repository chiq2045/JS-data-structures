const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const Chai = require('chai');
const expect = Chai.expect;
const helpers = require('../helpers');

const AVLTree = require('../../src/avl/AVLTree.js');

Chai.use(sinonChai);
Chai.use(helpers);

describe('AVLTree', function() {
    let tree;

    beforeEach(function() {
        tree = new AVLTree();
    });

    it('should start with a null root', function() {
        expect(tree.root).to.be.null;
    });

    describe('insert()', function() {
        it('should insert value at root when tree is empty', function() {
            tree.insert(50);

            expect(tree.root).to.not.be.null;
            expect(tree.root.value).to.equal(50);
        });

        it('should handle a left-left rebalance at the root', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(25)).to.be.true;
            expect(tree.insert(10)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 25,
                    left: {
                        value: 10,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 50,
                        left: null,
                        right: null
                    }
                }
            });
        });

        it('should handle a right-right rebalance at the root', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(75)).to.be.true;
            expect(tree.insert(100)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 75,
                    left: {
                        value: 50,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 100,
                        left: null,
                        right: null
                    }
                }
            });
        });

        it('should handle a left-right rebalance at the root', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(10)).to.be.true;
            expect(tree.insert(25)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 25,
                    left: {
                        value: 10,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 50,
                        left: null,
                        right: null
                    }
                }
            });
        });

        it('should handle a right-left rebalance at the root', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(100)).to.be.true;
            expect(tree.insert(75)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 75,
                    left: {
                        value: 50,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 100,
                        left: null,
                        right: null
                    }
                }
            });
        });

        it('should handle a left-left rebalance at a non-root', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(25)).to.be.true;
            expect(tree.insert(75)).to.be.true;
            expect(tree.insert(10)).to.be.true;
            expect(tree.insert(5)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 50,
                    left: {
                        value: 10,
                        left: {
                            value: 5,
                            left: null,
                            right: null
                        },
                        right: {
                            value: 25,
                            left: null,
                            right: null
                        }
                    },
                    right: {
                        value: 75,
                        left: null,
                        right: null
                    }
                }
            });
        });

        it('should handle a right-right rebalance at a non-root', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(25)).to.be.true;
            expect(tree.insert(75)).to.be.true;
            expect(tree.insert(90)).to.be.true;
            expect(tree.insert(100)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 50,
                    left: {
                        value: 25,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 90,
                        left: {
                            value: 75,
                            left: null,
                            right: null
                        },
                        right: {
                            value: 100,
                            left: null,
                            right: null
                        }
                    }
                }
            });
        });

        it('should handle a left-right rebalance at the non-root', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(25)).to.be.true;
            expect(tree.insert(75)).to.be.true;
            expect(tree.insert(5)).to.be.true;
            expect(tree.insert(10)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 50,
                    left: {
                        value: 10,
                        left: {
                            value: 5,
                            left: null,
                            right: null
                        },
                        right: {
                            value: 25,
                            left: null,
                            right: null
                        }
                    },
                    right: {
                        value: 75,
                        left: null,
                        right: null
                    }
                }
            });
        });

        it('should handle a right-left rebalance at the non-root', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(25)).to.be.true;
            expect(tree.insert(75)).to.be.true;
            expect(tree.insert(100)).to.be.true;
            expect(tree.insert(90)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 50,
                    left: {
                        value: 25,
                        left: null,
                        right: null
                    },
                    right: {
                        value: 90,
                        left: {
                            value: 75,
                            left: null,
                            right: null
                        },
                        right: {
                            value: 100,
                            left: null,
                            right: null
                        }
                    }
                }
            });
        });

        it('should not lose orphans on a left-left rebalance', function() {
            expect(tree.insert(80)).to.be.true;
            expect(tree.insert(70)).to.be.true;
            expect(tree.insert(100)).to.be.true;
            expect(tree.insert(65)).to.be.true;
            expect(tree.insert(75)).to.be.true;
            expect(tree.insert(50)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 70,
                    left: {
                        value: 65,
                        left: {
                            value: 50,
                            left: null,
                            right: null
                        },
                        right: null
                    },
                    right: {
                        value: 80,
                        left: {
                            value: 75,
                            left: null,
                            right: null
                        },
                        right: {
                            value: 100,
                            left: null,
                            right: null
                        }
                    }
                }
            });
        });

        it('should not lose orphans on a right-right rebalance', function() {
            expect(tree.insert(20)).to.be.true;
            expect(tree.insert(10)).to.be.true;
            expect(tree.insert(40)).to.be.true;
            expect(tree.insert(35)).to.be.true;
            expect(tree.insert(45)).to.be.true;
            expect(tree.insert(50)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 40,
                    left: {
                        value: 20,
                        left: {
                            value: 10,
                            left: null,
                            right: null
                        },
                        right: {
                            value: 35,
                            left: null,
                            right: null
                        }
                    },
                    right: {
                        value: 45,
                        left: null,
                        right: {
                            value: 50,
                            left: null,
                            right: null
                        }
                    }
                }
            });
        });

        it('should not lose orphans on a left-right rebalance', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(75)).to.be.true;
            expect(tree.insert(25)).to.be.true;
            expect(tree.insert(10)).to.be.true;
            expect(tree.insert(35)).to.be.true;
            expect(tree.insert(30)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 35,
                    left: {
                        value: 25,
                        left: {
                            value: 10,
                            left: null,
                            right: null
                        },
                        right: {
                            value: 30,
                            left: null,
                            right: null
                        }
                    },
                    right: {
                        value: 50,
                        left: null,
                        right: {
                            value: 75,
                            left: null,
                            right: null
                        }
                    }
                }
            });
        });

        it('should not lose orphans on a right-left rebalance', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(75)).to.be.true;
            expect(tree.insert(25)).to.be.true;
            expect(tree.insert(100)).to.be.true;
            expect(tree.insert(60)).to.be.true;
            expect(tree.insert(65)).to.be.true;

            expect(tree).to.be.structuredAsTree({
                root: {
                    value: 60,
                    left: {
                        value: 50,
                        left: {
                            value: 25,
                            left: null,
                            right: null
                        },
                        right: null
                    },
                    right: {
                        value: 75,
                        left: {
                            value: 65,
                            left: null,
                            right: null
                        },
                        right: {
                            value: 100,
                            left: null,
                            right: null
                        }
                    }
                }
            });
        });

        it('should not allow inserting duplicate values', function() {
            expect(tree.insert(50)).to.be.true;
            expect(tree.insert(25)).to.be.true;
            expect(tree.insert(50)).to.be.false;
            expect(tree.insert(10)).to.be.true;
            expect(tree.insert(75)).to.be.true;
            expect(tree.insert(75)).to.be.false;
            expect(tree.insert(100)).to.be.true;
            expect(tree.insert(65)).to.be.true;
            expect(tree.insert(30)).to.be.true;
            expect(tree.insert(10)).to.be.false;
            expect(tree.insert(1)).to.be.true;

            let expectedTree = {
                root: {
                    value: 50,
                    left: {
                        value: 25,
                        left: {
                            value: 10,
                            left: {
                                value: 1,
                                left: null,
                                right: null
                            },
                            right: null
                        },
                        right: {
                            value: 30,
                            left: null,
                            right: null
                        }

                    },
                    right: {
                        value: 75,
                        left: {
                            value: 65,
                            left: null,
                            right: null
                        },
                        right: {
                            value: 100,
                            left: null,
                            right: null
                        }
                    }
                }
            };

            expect(tree).to.be.structuredAsTree(expectedTree);
        });
    });
});