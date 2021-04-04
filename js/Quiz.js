class Quiz{
    constructor(){}
    getState(){
        var gs = database.ref('gamestate')
        gs.on("value",function(data){
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState : state
        })
    }

    async start(){
        if (gameState === 0){
            contestant = new contestant()
            var ccr =  await database.ref("playerCount").once("value");
            if (ccr.exists()){
                contestantCount = ccr.val()
                contestant.getCount()
            }
        }
        question1 = new Question()
        question1.display()
    }


}