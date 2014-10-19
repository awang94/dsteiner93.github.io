$( document ).ready( function(){
     $("#description").hide();
     $("#mockup").hide();
});
function showGame(){
    $("#members").fadeToggle(200);
    $("#start").fadeToggle(200);
    setTimeout(function(){
        $("#description").fadeIn('slow');
    },300);
       return false;
    };
function showMockup(){
    $("#description").fadeToggle(200);
    setTimeout(function(){
        $("#mockup").fadeIn('slow');
    },300);
       return false;
    };
