class Quiz{
    constructor (){}

getState(){
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value",function(data){
        gameState = data.val();
    })
}

update(state){
    database.ref('/').update({
        gameState: state
    });
}

async start(){
    if(gameState === 0){
        contestant = new Contestant();
        var ContastantCountRef = await database.ref('ContastantCount').once("value")

        if(ContastantCountRef.exists()){
            ContastantCount = ContastantCountRef.val();
            contestant.getCount();
        }
        question = new Question();
        question.dispaly();
    }
}

play(){
question.hide();
background("yellow");
Fill(0);
textSize(30)
text("result of the quiz" ,340,50)
text("------------------------------",320,65)
Contestant.getplayerInfo();
if(allContestants !== undefined){
    debugger
var display_Answers = 230
    fill("blue")
    textSize(20)
    text("Note: contestant who answered correct are highlighted green",130,230);

    for(var plr in allContestants){
        debugger;
        var correctAns = "4"
        if(correctAns ===  allContestants[plr].answer)
        fill("purple")
        else
        fill("red")

        display_Answers+=30;
        textSize(30)
        text(allContestants[plr].name + ":"+allContestants[plr].answer,250,display_Answers)

    
            } 

       }

   }

}