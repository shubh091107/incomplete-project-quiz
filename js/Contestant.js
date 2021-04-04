class Contestant {
    constructor(){
      this.index = null;
      this.distance =0;
      this.name = null
  
    }
  
    getCount(){
      var contestantCountRef = database.ref('playerCount');
      contestantCountRef.on("value",function(data){
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count
      });
    }
  
    update(name){
      var contestantIndex = "players/player" + this.index;
      database.ref(contestantIndex).set({
        name:name
      });
    }
  
    static getContestantinfo(){
      var info = database.ref('contestant');
      info.on("value",(data)=> {
        allPlayers = data.val();
      })
  
    }
  }
  