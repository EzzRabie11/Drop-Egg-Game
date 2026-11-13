

function startGame() {

  moveEgg($eggs[0], Math.random() * 10);
  moveEgg($eggs[1], Math.random() * 10);
  moveEgg($eggs[2], Math.random() * 10);

isEggHunted($eggs[0],$basket);
isEggHunted($eggs[1],$basket);
isEggHunted($eggs[2],$basket);

  let theGame=requestAnimationFrame(startGame);
  if(lifeScore<=0){
    cancelAnimationFrame(theGame);
    $("#Start h4").text("Game Over Try Again! ^-^");
    $("#Start").slideDown(1000);
  }
}
function moveEgg(egg, speed) {
  let $topOfEgg = $(egg).offset().top,
    distance = Math.random() * speed + 1,
    bottomOfBasket = $("#Basket").offset().top + $("#Basket").outerHeight(true),
    indexofEgg=$eggs.index(egg);
  if ($topOfEgg <= bottomOfBasket) {
    $(egg).offset({
      top: $topOfEgg + distance,
    });
  } else {
    if(lifeScore>0){
   backEgg(egg);
  $brokenEggs.eq(indexofEgg).fadeIn(500).delay(500).fadeOut(500);
  $("#LifeScore").text(--lifeScore);

  }
}
}

function resetGame(){
    backEgg($eggs[0]);
    backEgg($eggs[1]);
    backEgg($eggs[2]);
    lifeScore=5;
    $("#LifeScore").text(lifeScore);
    score=0;
    $("#Score").text(score);
 }
 function saveHighestScore(){ 
    if (score>=highestScore){
        highestScore=score;
        localStorage.setItem("highestScore",highestScore);
        $("#HighestScore").text(highestScore);
    }
    return highestScore;
 }
function backEgg(egg){
 $(egg).offset({
      top: 150,
    });
}

function isEggHunted(egg,$basket){
    if(collision(egg,$basket)){
        $(".score").text(++score);
        backEgg(egg);
    }
}

function collision(item1,item2){
    let t1=$(item1).offset().top,
        l1=$(item1).offset().left,
        b1=t1 + $(item1).outerHeight(true),
        r1=l1+$(item1).outerWidth(true),

        t2=$(item2).offset().top,
        l2=$(item2).offset().left,
        b2=t2+$(item2).outerHeight(true),
        r2=l2+$(item2).outerWidth(true);

        if(b1 < t2 || l1 > r2 || t1 > b2 || l2 > r1 ){
            return false
        }
        return true
}
