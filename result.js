localStorage.setItem("score", "0");
document.getElementById("score").innerHTML = localStorage.getItem("score");







document.getElementById("result").innerHTML = score;
function result(){
    if (score = 0){
        document.getElementById("tag").innerHTML = "You lose!";
    }
    else if(score>3 || score<7){
        document.getElementById("tag").innerHTML = "You can do better!";
    }
    else{
        document.getElementById("tag").innerHTML = "You win!";
    }
}