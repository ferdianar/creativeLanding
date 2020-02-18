//event saat di klik
$('.page-scroll').on('click', function(e) {
    var tujuan = $(this).attr('href');
    var elemsTujuan = $(tujuan);

    $('body').animate({
        scrollTop: elemsTujuan.offset().top - 50
    }, 1250, 'linear');

    e.preventDefault();
});