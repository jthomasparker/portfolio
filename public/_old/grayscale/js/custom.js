$(document).ready(function() {
    $('.hover').bind('touchstart touchend', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });

   /* $('a').on('click', function(){
        $(this).blur()
    }) */

    
});