$(document).ready(function () {
    $("tr").addClass("colored");

    $("tr").mouseover(function(){
        $(this).addClass("coloredHover");
    });

    $("tr").mouseout(function(){
        $(this).removeClass("coloredHover");
    });

    var rainChars = '1234567890ABCDEFX';
    
    var verschiebeZeichen = function() {
        var i_char = Math.floor(Math.random() * rainChars.length);
        var left_position = Math.floor(Math.random() * screen.width);

        //For generating unique id
        var d = new Date();
        var n = d.getTime();


        $("body").append("<span id='curr_character_" + n + "' class='dropping_characters'>" + rainChars[i_char] + "</span>");
        var $curr = $("#curr_character_" + n);
        $curr.css("position", "fixed");
        $curr.css("top", "0px");
        $curr.css("left", left_position);
        $curr.css("color", "white")
        $curr.animate({
            top: "+=" + screen.height + "px",
            fontSize: "+=10em"
        }, 6000, "linear", function () {
            $curr.remove();
        });
    };
    
    setInterval(verschiebeZeichen, 300);

    $("div.mouseCoordinates").on("mousemove", function( event ) {
        $("#mouseCordsText").text( "pageX: " + event.pageX + ", pageY: " + event.pageY );
    });

});