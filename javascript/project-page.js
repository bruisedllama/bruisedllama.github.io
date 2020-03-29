$(".item").click(function() {
    var link = $(this).attr('href');
    window.location.href = link;
})