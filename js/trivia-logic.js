function createTrivia(){

    var triviaBox;
    var index;
    index = Math.floor(Math.random()*10);


    triviaBox = document.getElementById('trivia-text');
    
    setInterval(randomTrivia, 10000);
    function randomTrivia(){
        if(index >= trivia.length){
            index = 0;
        }
    
        triviaBox.innerHTML = trivia[index].content;
        index += 1;
    }
}

