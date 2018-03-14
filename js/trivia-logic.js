var index;
    index = Math.floor(Math.random()*10);

function createTrivia(){

    var triviaBox;
    
    triviaBox = document.getElementById('trivia-text');
    
    setInterval(randomTrivia, 10000);
    function randomTrivia(){
        if(index >= trivia.length){
            index = 0;
        }
    
        triviaBox.innerHTML = trivia[index].content;
        changeDot(index);
        index += 1;
    }
}

function changeTrivia(x){
    index += x;
    if(index >= trivia.length){
        index = 0;
    }
    if(index < 0){
        index = trivia.length-1;
    }
    var triviaBox;
    triviaBox = document.getElementById('trivia-text');
    triviaBox.innerHTML = trivia[index].content;
    changeDot(index);
}

function changeDot(x){
    var dots = [
        document.getElementById('dot1'),
        document.getElementById('dot2'),
        document.getElementById('dot3'),
        document.getElementById('dot4'),
        document.getElementById('dot5')
    ];

    for(i=0; i<dots.length; i++){
        dots[i].classList.remove('dot-checked');
    }
    dots[x].classList.add('dot-checked');
}