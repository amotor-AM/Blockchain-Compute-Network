const {GENESIS} = require("../config")

const HASH_LENGTH = 64
const MAX_HASH_VALUE = parseInt("f".repeat(HASH_LENGTH), 16)

class Block {
    constructor({blockHeaders}) {
        this.blockHeaders = blockHeaders
    }

    static calculateBlockTargetHash({lastBlock}) {
        const hash = (MAX_HASH_VALUE / lastBlock.blockHeaders.difficulty).toString(16)
        if(hash.length > HASH_LENGTH) {
            return "f".repeat(HASH_LENGTH)
        }
        return "0".repeat(HASH_LENGTH - hash.length) + hash
    }

    static mineBlock({lastBlock, miner}) {

    }

    static genesis() {
        return new this(GENESIS)
    }
}

module.exports = Block