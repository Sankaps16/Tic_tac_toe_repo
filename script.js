let box=document.querySelectorAll(".innerbox");
let resetbtn=document.querySelector(".resetbtn");
let msgcontainer=document.querySelector(".msgdiv");
let msg=document.querySelector(".msg");
let newgame=document.querySelector("#new_game");

let turnO=true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetgame=()=>{
    turnO=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
    
}
let count=0;



//box.forEach(  (val) => {})....fromat
box.forEach((singlebox)=>{
    singlebox.addEventListener("click",()=>{
        console.log("BUTTON WAS CLICKED");
        count++;
        if(turnO)
        {
            singlebox.classList.add("color1");
            singlebox.innerText="O";
            turnO=false;
        }
        else{
            singlebox.classList.add("color2");
            singlebox.innerText="X";
            turnO=true;
        }
        singlebox.disabled=true;
        checkWinner();


    });
});
const checkWinner= ()=>{
    for(let pattern of winPatterns){
        let pos1Val=box[pattern[0]].innerText;
        let pos2Val=box[pattern[1]].innerText;
        let pos3Val=box[pattern[2]].innerText;
        

        if(pos1Val != "" && pos2Val != "" && pos3Val != "")
        {
            
            if(pos1Val === pos2Val && pos2Val === pos3Val)
            {
                console.log("WINNER",pos1Val);
                displayWinner(pos1Val);

            }
            else{
                if(count === 9)
                    {
                        msg.innerText="The game is a draw , please restart";
                        msgcontainer.classList.remove("hide");
                        disabledboxes();

                    }
                
            }
        }

    }

}
const displayWinner=(Winner)=>{
    msg.innerText=`Congratulations, the winner is ${Winner}`;
    msgcontainer.classList.remove("hide");
    disabledboxes();


}
const disabledboxes=()=>{
    for(let singlebox of box){
        singlebox.disabled=true;
    }
}
const enabledboxes=()=>{
    for(let singlebox of box){
        singlebox.disabled=false;
        singlebox.innerText="";
    }
}
resetbtn.addEventListener("click",resetgame);
newgame.addEventListener("click",resetgame);

