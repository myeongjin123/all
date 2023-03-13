const scissors = document.getElementById("scissors");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const npc = document.getElementById('npc');


function rps(){

    let myGame = event.target.id;
    let message;
    const srp = ['scissors', 'rock', 'paper'];

    let com = srp[Math.floor(Math.random() * 3)];

    console.log(myGame);
    console.log(com);
    if(myGame == 'scissors'){
        switch(com) {
            case 'scissors':
            message = "비겼습니다. 다시하세요.";
            break;
            case 'rock':
            message = "푸하하, 내가 이겼어요. 메롱~"
            npc.classList.add('npcmove');
            break;
            case 'paper':
                message = "실력자시군요. 다시 도전합니다."
                break;
        }
        }else if(myGame == 'rock'){
            switch(com) {
                case 'scissors':
                message = "실력자시군요. 다시 도전합니다."
                break;
                case 'rock':
                message = "비겼습니다. 다시하세요.";
                break;
                case 'paper':
                    message = "푸하하, 내가 이겼어요. 메롱~"
                    npc.classList.add('npcmove');
                    break;
        }   
        }else if(myGame == 'paper'){
            switch(com) {
                case 'scissors':
                message = "푸하하, 내가 이겼어요. 메롱~"
                npc.classList.add('npcmove');
                break;
                case 'rock':
                message = "실력자시군요. 다시 도전합니다."
                break;
                case 'paper':
                    message = "비겼습니다. 다시하세요.";
                    break;
        }
    }


    document.getElementById('playgame').innerHTML = message;
    document.getElementById('mrps').innerHTML = trans(myGame);
    document.getElementById('crps').innerHTML = trans(com);
    document.getElementById('mimg').src="images/" + myGame + ".png";
    document.getElementById('cimg').src="images/" + com + ".png";
    // if(n == 1){
    //     alert("가위" + com);
    // }else if(n == 2){
    //     alert("바위" + com);
    // }else{
    //     alert("보" + com);
    // }
    
}
npc.addEventListener('animationend', classrm, false);
function classrm(){
    npc.classList.remove('npcmove');
}
function trans(ts){
    let tss = '모름';
    switch(ts){
        case 'scissors' :
            tss = "가위"
            break;
            case 'rock' :
                tss = "바위"
                break;
                case 'paper' :
                    tss = "보"
                    break;
        
    }
    return tss;
}


scissors.addEventListener("click", rps);
rock.addEventListener("click", rps);
paper.addEventListener("click", rps);