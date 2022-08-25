const STOP = "STOP"
const ADD = "ADD"
const PUSH = "PUSH"



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
                        const firstValue = this.state.stack.pop()
                        const secondValue = this.state.stack.pop()
                        this.state.stack.push(firstValue + secondValue)
                        break
                    default:
                        break
                }
            } catch (error) {
                return this.state.stack[this.state.stack.length - 1]
            }
            
            this.state.programCounter ++
        }
    }
}

const codeArray = [PUSH, 2, PUSH, 3, ADD, STOP]

const interpreter = new Interpreter()
interpreter.runCode(code) // returns 5