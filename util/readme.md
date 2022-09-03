Here I will create our helper methods to enable functionality of the blockchain. 


1) sortCharacters - this helper method takes in an object and returns a sorted string contianing the values of the object
This means that no matter where the data is stored in the object the resulting string will always be the same if the data
contained in the objects are the same. This will be useful for mining blocks

2) hash method - this helper method will be critical to the functionality of the blockchain network. This hash should successfully
generate a unique output for every unique input in a manner that is cryptographically secure and deterministic. The hash algorithm
that I will be implementing is similar to Ethereum's hashing algorithm. 

Keccak256 Hash - generates output as a 64 character long hexadecimal string. Each character represents the value of a set of binary bits