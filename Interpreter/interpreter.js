const STOP = "STOP"
const ADD = "ADD"
const SUB = "SUB"
const MUL = "MUL"
const DIV = "DIV"
const PUSH = "PUSH"
const LT = "LT"
const GT = "GT"
const EQ = "EQ"
const AND = "AND"
const OR = "OR"
const JUMP = "JUMP" // moves program counter to another location in the code array
const JUMPI = "JUMPI" // jumps to destination IF a condition is met
const EXECUTION_LIMIT = 100000



class Interpreter {
    constructor() {
        this.state = {
            programCounter: 0,
            stack: [],
            code: [],
            executionCount: 0
        }
    }
    jump() {
        const destination = this.state.stack.pop()
        if(destination < 0 || destination > this.state.code.length) {
            throw new Error(`Destination not valid: ${destination}`)
        }
        this.state.programCounter = destination - 1
    }
    runCode(code) {
        this.state.code = code
        while(this.state.programCounter < this.state.code.length) {
            this.state.executionCount++
            if(this.state.executionCount > EXECUTION_LIMIT) {
                throw new Error(`Execution Count Exceeded the Max Allowable Value of ${EXECUTION_LIMIT}.`) // prevents infinite loop crashes
            }
            const operationCode = this.state.code[this.state.programCounter]
            try {
                switch(operationCode) {
                    case STOP:
                        throw new Error("Code completed successfully")
                    case PUSH:
                        this.state.programCounter++
                        if(this.state.programCounter === this.state.code.length) {
                            throw new Error("Invalid PUSH")
                        }
                        const value = this.state.code[this.state.programCounter]
                        this.state.stack.push(value)
                        break
                    case ADD:
                    case SUB:
                    case MUL:
                    case DIV:
                    case LT:
                    case GT:
                    case EQ:
                    case AND:
                    case OR:
                        const firstValue = this.state.stack.pop()
                        const secondValue = this.state.stack.pop()
                        if(operationCode === ADD) this.state.stack.push(firstValue + secondValue)
                        if(operationCode === SUB) this.state.stack.push(firstValue - secondValue)
                        if(operationCode === MUL) this.state.stack.push(firstValue * secondValue)
                        if(operationCode === DIV) this.state.stack.push(firstValue / secondValue)
                        if(operationCode === LT) a < b ? this.state.stack.push(1) : this.state.stack.push(0) // binary yes / no 
                        if(operationCode === GT) a > b ? this.state.stack.push(1) : this.state.stack.push(0)
                        if(operationCode === EQ) a === b ? this.state.stack.push(1) : this.state.stack.push(0)
                        if(operationCode === AND) this.state.stack.push(a && b)
                        if(operationCode === OR) this.state.stack.push(a || b)
                        break
                    case JUMPI:
                    case JUMP:
                        if(operationCode === JUMP) this.jump()
                        if(operationCode === JUMPI && this.state.stack.pop() === 1) this.jump()
                        break
                    default:
                        break
                }
                
            } catch (error) {
                if(error.message === "Code completed successfully") { // only return if STOP condition is met
                    return this.state.stack[this.state.stack.length - 1]
                }
                throw error
            }
            
            this.state.programCounter ++
        }
    }
}

// const codeArray = [PUSH, 2, PUSH, 3, SUB, STOP]

// const interpreter = new Interpreter().runCode(codeArray)
// console.log("result", interpreter)

code = [PUSH, 0, JUMP, PUSH, 3, STOP]
try {
    new Interpreter().runCode(code)
    console.log("result", result)
} catch(err) {
    console.log(err.message)
}
