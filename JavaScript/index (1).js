function reverseWordsInSentence(sentence) 
{
    let reversedSentence = '';
    let wordStart = 0;

    for (let i = 0; i <= sentence.length; i++) {
        if (sentence[i] === ' ' || i === sentence.length) {
            let word = '';
            for (let j = i - 1; j >= wordStart; j--) {
                word += sentence[j];
            }
            reversedSentence += word + ' ';
            wordStart = i + 1;
        }
    }

    return reversedSentence;
}

const sentence = "This is a sunny day"; 
const reversedSentence = reverseWordsInSentence(sentence);
console.log("Reversed sentence: " + reversedSentence);