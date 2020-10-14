$(".showLizzoTwo").click(function(){
    $(".lizzoTwo").fadeIn();
    $(".lizzoOne").fadeOut();
    $(".showLizzoTwo").fadeOut();
    $(".showLizzoThree").fadeIn();
   
});

$(".showLizzoThree").click(function() {
        $(".lizzoTwo").fadeOut();
$(".showLizzoThree").fadeOut();
    $(".lizzoThree").fadeIn();
    $(".Lizzopurse").fadeIn();

    });
$(".Lizzopurse").hover(function(){
         $(".lizzoThree").fadeOut();

    $(".lizzoPurse").fadeIn();
    $(".lizzoEnding").fadeIn();
    $(".cuzIloveyou").fadeIn();
});