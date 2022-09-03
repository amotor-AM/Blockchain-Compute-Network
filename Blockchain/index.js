const Block = require("./block")

class Blockchain {
    constructor() {
        this.chain = [Block.genesis()] // calls static method without creating a new instance of the Block class
    }
}

module.exports = Blockchain
