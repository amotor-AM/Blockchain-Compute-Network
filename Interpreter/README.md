I will be using the following recources to develop the project's 'Smart Contract' programming language

https://ethereum.org/en/whitepaper/
https://ethereum.github.io/yellowpaper/paper.pdf
https://cryptopapers.info/assets/pdf/eth_beige.pdf

The white paper describes the overal functionality of the system as a whole. The yellow paper dives deep into the mathematics that run,
execute, and validate smart contracts. Finally the beige paper breaks down complex mathematical principles in a way that allows them to 
be easily understood. Since I am not a Math Major, I will probably be utilizing the whitepaper and beige paper heavily, but will read through
the yellowpaper thouroughly throughout.

To meet MVP my 'Smart Contract' programming language should enable the following operational codes:

Mathematics: STOP, ADD, SUBTRACT(SUB), MULTIPLY(MUL), DIVIDE(DIV), and PUSH
 - Mathamatical operation codes will allow us to mutate the wallet balance and change overall state

Comparisons: AND, OR, LESS THAN(LT), GREATER THAN(GT), and EQUAL TO(EQ)
 - comparisons will enable us to achieve conditional execution (I.E. confirm IF balance is not LESS THAN transaction amount)

Moving: JUMP, JUMPI
 - Moving operational codes will allow the program to move around the code as needed based off comparison conditional execution
 allowing different sections of code to be executed based on the previous comparison.