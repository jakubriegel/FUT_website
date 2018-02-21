window.onload = function(){
    createTrivia();
}

var triviaBox;
triviaBox = document.getElementById('trivia-box');

var triviaCount;
triviaCount = trivia.length();

function createTrivia(){   
    setInterval(randomTrivia(index, 1000));

}

function randomTrivia(prevIndex){
    index = prevIndex + 1;

    triviaBox.innerHTML = trivia[index].content;
}