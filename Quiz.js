class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
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
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }
    
  

  play(){
  
  question.hide();
  background("lightblue");
  textSize(30);
  fill("brown");
  text("Result of the quiz",340,50);
  text("................................",320,65);
  Contestant.getPlayerInfo();
      //write code to show a heading for showing the result of Quiz

      //call getContestantInfo( ) here
      //getContestantInfo()
    
    
      //write condition to check if contestantInfor is not undefined
  if(allContestants !== undefined){
    var display_answers=230;
    fill("blue");
    textSize(20);
    text("NOTE: contestant who answer corrected are highlighted in green color! ",130,230);
      
      //write code to add a note here

      //write code to highlight contest who answered correctly
      for(var plr in allContestants){
      var correctAns="2";
      if (correctAns === allContestants[plr].answer)
        fill("Green")
        else
        fill("red");

        display_answers+=30;
        textSize(15);
        text(allContestants[plr].name+":"+allContestants[plr].answer,250,display_answers);
      }
    }
    }
    }


