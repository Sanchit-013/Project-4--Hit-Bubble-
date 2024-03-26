    var timer = 60;
    var score = 0;
    var random = 0;


function  makeBubble(){
    var clutter = "";

    for (var i=1; i<=70; i++){
        var rn = Math.floor(Math.random()*10)
    
        clutter +=`<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function hitNum(){
    random = Math.floor(Math.random()*10);
    document.querySelector("#hitn").textContent = random;

}

function time(){
    var second = setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#tmr").textContent = timer;
        }
        else{
            clearInterval(second);
            document.querySelector("#pbtm").innerHTML = `GAME OVER  <br/> Your Score ${score}` ;
            document.querySelector("#pbtm").style.fontSize = `50px`;
            document.querySelector("#pbtm").style.fontWeight = `600`;
            document.querySelector("#pbtm").style.color = `darkgreen`;
            
               
        }
        
    },1000)
}

function netScore(){
    score += 10
    document.querySelector("#scr").textContent = score
}

    document.querySelector("#pbtm")
    .addEventListener("click",function(dets){
    var clicked = Number(dets.target.textContent);
    if(clicked === random){
        netScore();
        makeBubble();
        hitNum();
    }
    })
    


makeBubble();
hitNum();
time();
