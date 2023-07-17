'use strict';

var guessNumber = Math.floor(Math.random()*20)+1 ;
document.querySelector(".check")
document.querySelector(".message")
document.querySelector(".guess")






document.querySelector(".check").addEventListener('click',
()=>{
    var input = document.querySelector(".guess").value;
    
    if (input < guessNumber){
        alert("looooow")

    }
    else if (input < guessNumber){
        alert("lhigh")
    } 
    else{
        document.querySelector(".message").
    }
}