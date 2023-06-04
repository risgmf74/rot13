// Decode of ROT13 cipher. The letters will shifted down by 13 places
// Only transform alphabetic character

function rot13(str) {
    // create empty array to store a transformed character
    const newStr = [];
    for (let i = 0; i < str.length; i++) {
    // transfom a character in to decimal number format
    let code = str.charCodeAt(i);
    // uppercase characters are between 65 and 90, lowercase are between 97 and 122
    if (code >= 65 && code <= 90) {
        code = (code - 13 < 65) ? code + 13 : code - 13;
    } else if (code >= 97 && code <= 122) {
        code = (code - 13 < 97) ? code + 13 : code - 13;
    }
    // push a transformed character into an array
    newStr.push(String.fromCharCode(code));
    }
    // return a result from array in string format
    return newStr.join('');
}

// rot13("Gur Dhvpx Oebja Sbk Whzcf Bire Gur Ynml Qbt.") should return 'The Quick Brown Fox Jumps Over The Lazy Dog.'