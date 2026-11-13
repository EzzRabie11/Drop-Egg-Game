let $eggs = $(".egg"),
    $brokenEggs=$(".brokenEgg"),
    lifeScore=5,
    $basket=$("#Basket"),
    score=0,
    highestScore=0;
$(window).mousemove(function (e) {
    let halfOfBasket=$("#Basket").outerWidth(true)/2;
    if (e.pageX>=halfOfBasket && e.pageX<=$(window).outerWidth(true)-halfOfBasket){
    $("#Basket").offset({
        left:e.pageX-halfOfBasket
    });
}  
});

$("#Start").click(function(){
    saveHighestScore();
    resetGame();
    $("#Start ").slideUp(1000 ,startGame());
    
})