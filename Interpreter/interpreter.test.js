const Interpreter = require("./interpreter")
const {STOP, ADD, SUB, MUL, DIV, PUSH, LT, GT, EQ, AND, OR, JUMP, JUMPI} = Interpreter.OPCODE_MAP


describe("Interpreter",() => {
    describe("runCode()", () => {
        // computational
        describe("and the code includes ADD", () => {
            it("adds two values", () => {
                expect(
                    new Interpreter().runCode([PUSH, 2, PUSH, 3, ADD, STOP])
                ).toEqual(5)
            })
        })
        describe("and the code includes SUB", () => {
            it("subtracts one value from another", () => {
                expect(
                    new Interpreter().runCode([PUSH, 2, PUSH, 3, SUB, STOP])
                ).toEqual(1)
            })
        })
        describe("and the code includes MUL", () => {
            it("multiplies two values", () => {
                expect(
                    new Interpreter().runCode([PUSH, 2, PUSH, 3, MUL, STOP])
                ).toEqual(6)
            })
        })
        describe("and the code includes DIV", () => {
            it("divides one value from another", () => {
                expect(
                    new Interpreter().runCode([PUSH, 2, PUSH, 3, DIV, STOP])
                ).toEqual(1.5)
            })
        })
        // comparison
        describe("and the code includes GT", () => {
            it("checks if one value is greater than another", () => {
                expect(
                    new Interpreter().runCode([PUSH, 2, PUSH, 3, GT, STOP])
                ).toEqual(1)
            })
        })
        describe("and the code includes LT", () => {
            it("checks if one value is less than another", () => {
                expect(
                    new Interpreter().runCode([PUSH, 2, PUSH, 3, LT, STOP])
                ).toEqual(0)
            })
        })
        describe("and the code includes EQ", () => {
            it("checks if one value is equal to another", () => {
                expect(
                    new Interpreter().runCode([PUSH, 2, PUSH, 3, EQ, STOP])
                ).toEqual(0)
            })
        })
        describe("and the code includes AND", () => {
            it("ands two conditions", () => {
                expect(
                    new Interpreter().runCode([PUSH, 1, PUSH, 0, AND, STOP])
                ).toEqual(0)
            })
        })
        describe("and the code includes OR", () => {
            it("ors two conditions", () => {
                expect(
                    new Interpreter().runCode([PUSH, 1, PUSH, 0, OR, STOP])
                ).toEqual(1)
            })
        })
        describe("and the code includes JUMP", () => {
            it("jumps to a destination", () => {
                expect(
                    new Interpreter().runCode([PUSH, 6, JUMP, PUSH, 0, JUMP, PUSH, "jump successful", STOP])
                ).toEqual("jump successful")
            })
        })
        describe("and the code includes JUMPI", () => {
            it("jumps to a destination", () => {
                expect(
                    new Interpreter().runCode([PUSH, 8, PUSH, 1, JUMPI, PUSH, 0, JUMP, PUSH, "jump successful", STOP])
                ).toEqual("jump successful")
            })
        })
        describe("and the code includes an invalid JUMP index", () => {
            it("throws an error", () => {
                expect(
                    () => new Interpreter().runCode([PUSH, 99, JUMP, STOP]) //have to add callback function to catch errors that are thrown 
                ).toThrow("Destination not valid: 99")
            })
        })
        describe("and the code includes an invalid PUSH value", () => {
            it("throws an error", () => {
                expect(
                    () => new Interpreter().runCode([PUSH, 0, PUSH])
                ).toThrow("Invalid PUSH")
            })
        })
        // This test works but it causes JEST to log out to the console at every iteration
        // describe("and the code includes an infinite loop", () => {
        //     it("throws an error", () => {
        //         expect(
        //             () => new Interpreter().runCode([PUSH, 0, JUMP, STOP])
        //         ).toThrow("Execution Count Exceeded the Max Allowable Value of 10000")
        //     })
        // })
    })
})