$(document).ready(function () {  
    var objectHeight = 0;
    $.each($('.hero').children(),function(){
        objectHeight += $(this).height();
    });
    $('.hero').height(objectHeight);
})