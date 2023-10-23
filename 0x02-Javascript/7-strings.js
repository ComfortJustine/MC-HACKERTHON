let sentence = "The quick brown lazy dog jumps over the fox.";

function countWords(sentence){
    // Remove leading and trailing whitespace
    sentence = sentence.trim();

    // Remove consecutive whitespaces and punctuation marks.
    sentence = sentence.replace(/[^\w\s]|_/g).replace(/\s+/g, " ");

    // Split the sentence into an array of words
    let words = sentence.split(" ");

    // Return the number of words in array of words.
    return words.length;
}

let wordCount = countWords(sentence);
console.log(wordCount); // Output: 9