$(document).ready(function(){
    $('.nav-burger-logo').click(function(event){
        $('.menu-adaptive').slideToggle(300);
        $('.menu-adaptive').toggleClass('.active');
        $('.nav-burger-logo').toggleClass('disable');
    });
});

$(document).ready(function(){
    $('.menu-adaptive-closed').click(function(event){ 
        $('.menu-adaptive').slideToggle(100);      // Закрывашка
        $('.menu-adaptive').removeClass('active');  // Большое меню                                     
        $('.nav-burger-logo').removeClass('disable');
        $('.nav-burger-logo').removeClass('disable');  // Кнопочка
    });
});