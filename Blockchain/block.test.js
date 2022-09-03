const Block = require("./block")

describe("Block()", () => {
    describe("calculateBlockTargetHash()", () => {
        it("returns the max hash value when the network difficulty is 1", () => {
            expect(Block.calculateBlockTargetHash({lastBlock: {blockHeaders: {difficulty: 1}}})).toEqual("f".repeat(64))
        })
        it("calculates a low hash value when the last block difficulty is high", () => {
            expect(Block.calculateBlockTargetHash({lastBlock: {blockHeaders: {difficuly: 12}}})).toBe(true)
        })
    })
})