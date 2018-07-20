// $(document).ready(function() {
//   alert("Jquery loaded");
// });
$('a[href^="#"]').on('click', function(event){
    var target = $(this.getAttribute('href'));

    if(target.length){
        event.preventDefault();
        $('html,body').stop().animate({
            scrollTop: target.offset().scrollTop
        },  1000);
    }
})
