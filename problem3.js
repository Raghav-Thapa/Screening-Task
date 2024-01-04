function count(string) {
    const charCount = {};
    
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        
        if (char !== ' ') {
            if (charCount[char]) {
                charCount[char]++;
            } else {
                charCount[char] = 1;
            }
        }
    }
    
    return charCount;
}

const input = "hello how are you";
const result = count(input);
console.log(result);
