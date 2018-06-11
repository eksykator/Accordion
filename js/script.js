$('.header').on('click', (function(){
    $('.content.active').removeClass('active');
    $(this).siblings().addClass('active');
}));