const palindromes = function (phrase) {
    phrase = phrase
                .toLowerCase()
                .replace(/[^a-z0-9\s]/g, "")
                .replaceAll(" ", "");
    let reverse = [...phrase].reverse().join("");
    return reverse == phrase;
};

// Do not edit below this line
module.exports = palindromes;
