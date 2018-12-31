$('.navigator-responsive a').click((e)=>{
    e.stopPropagation();
    $('#navigator-resposive-submenu').slideToggle();
});

$('body').click(() => {
    $('#navigator-resposive-submenu').slideUp();
})