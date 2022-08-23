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
const JUMPI = "JUMPI" // jumps to dextination IF a condition is met



class Interpreter {
    constructor() {
        this.state = {
            programCounter: 0,
            stack: [],
            code: []
        }
    }
    runCode(code) {
        this.state.code = code
        while(this.state.programCounter < this.state.code.length) {
            const operationCode = this.state.code[this.state.programCounter]
            try {
                switch(operationCode) {
                    case STOP:
                        throw new Error("Code completed successfully")
                    case PUSH:
                        this.state.programCounter++
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
                    default:
                        break
                    case JUMP:
                    case JUMPI:
                        const condition = this.state.stack.pop()
                        if(operationCode === JUMP) this.state.programCounter = condition - 1
                        if(operationCode === JUMPI && condition === 1) this.state.programCounter = this.state.stack.pop() - 1
                        break
                }
                
            } catch (error) {
                return this.state.stack[this.state.stack.length - 1]
            }
            
            this.state.programCounter ++
        }
    }
}

// const codeArray = [PUSH, 2, PUSH, 3, SUB, STOP]

// const interpreter = new Interpreter().runCode(codeArray)
// console.log("result", interpreter)

code = [PUSH, 6, PUSH, 1, JUMPI, PUSH, 0, JUMP, PUSH, "jump successful", STOP]
result = new Interpreter().runCode(code)
console.log("result", result)