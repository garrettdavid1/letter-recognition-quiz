const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
const correctLetters = [];
const incorrectLetters = [];
let currentLetter = '';

const mark = (isCorrect) => {
    if(isCorrect){
        correctLetters.push(currentLetter);
    } else{
        incorrectLetters.push(currentLetter);
    }

    letters.splice(letters.indexOf(currentLetter), 1);
    setLetter();
    buildLists();
}

const buildLists = () => {
    const correctList = $("#correct-letters");
    const incorrectList = $("#incorrect-letters");

    const correctListItems = correctLetters.map(letter => {
      return `<li>${letter}</li>`;
    });
    const incorrectListItems = incorrectLetters.map(letter => {
      return `<li>${letter}</li>`;
    });

    correctList[0].innerHTML = correctListItems.join("");
    incorrectList[0].innerHTML = incorrectListItems.join("");
}

const setLetter = () => {
    let index;
    if(letters.length > 0){
        index = Math.floor(Math.random() * (letters.length));
        currentLetter = letters[index];
    } else{
        currentLetter = `${correctLetters.length} Correct <hr /> ${incorrectLetters.length} Incorrect`;
        $('#correct-btn').remove();
        $('#incorrect-btn').remove();
        $('#question').remove();
        $('#letter').css('font-size', '3em');
    }
    
    $('#letter')[0].innerHTML = currentLetter;
};

$(document).ready(function(){
    setLetter();
    buildLists();
})