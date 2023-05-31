$(document).ready(function(){
    
    $("#share-btn").click(function(){
        if ($(window).width() < 600) {
            $(".author-cont").toggle();
            $(".share").toggleClass("hidden");
            $("section footer").toggleClass("very-dark-bckgrnd");
            $("#share-btn").toggleClass("invert-col");
            console.log($(window).width());
        } else {
            $(".share").toggleClass("hidden very-dark-bckgrnd");
            $(".svg-cont").toggleClass("hidden");
            $("#share-btn").toggleClass("invert-col");
            console.log($(window).width());
        }
    });
});