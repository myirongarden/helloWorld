$(document).ready(function() {
    $(".nav-link").click(function(event) {
        event.preventDefault();
        var section = $(this).data("section");
        loadContent(section);
    });

    $('nav .nav-link:first').trigger('click');

    function loadContent(section) {
        $.ajax({
            url: "http://helloworld.claus:8080/content/" + section,
            method: "GET",
            dataType: "html",
            success: function(data) {
                $("#content").html(data);
            },
            error: function(error) {
                console.log("An error occurred: " + error);
            }
        });
    }
});