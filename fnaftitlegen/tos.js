let tosShown = false;

function showTOS() {
    if (!tosShown) {
        tosShown = true;

        $("#background").addClass("blur");

        $("#staticTOS").css("opacity", 0).animate({
            opacity: 0.4  
        }, 2000);

        $("#termsText").css("opacity", 0).removeClass("hidden").animate({
            opacity: 1,
            top: "-=50px"
        }, 2000);

        $("#centerClickArea").hide(); 
        
       
        const tosSong = document.getElementById('tosSong');
        tosSong.play();
    }
}

$(document).ready(function() {
    const tosSong = document.getElementById('tosSong');
    tosSong.play();

    $("body").css("display", "none");
    $("body").fadeIn(2000);

    $("a.transition").click(function(event){
        event.preventDefault();
        const linkLocation = this.href;

        tosSong.pause();
        tosSong.currentTime = 0; 
        $("body").fadeOut(1000, function(){
            window.location = linkLocation;
        });
    });
});

