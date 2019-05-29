$(document).ready(function(){

    var totalPic = $('.image').length;
    var picWidth = $('.image').width();
    var picHeight = $('.image').height();
    var totalWidth = totalPic * picWidth;

    $('#slides').css({
        width:totalWidth
    });

    $('#slider').css({
        width:picWidth,
        height:picHeight
    });

    $('#left').click(function() {
        $('.image:first').appendTo('#slides');
    });

    $('#right').click(function() {
        $('.image:last').prependTo('#slides');
    });
});