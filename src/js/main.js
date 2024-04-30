// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import $ from 'jquery'

window.jQuery = window.$ = $



$(document).ready(function() {
    $(".nav-link").not(".dropdown-toggle").click(function(event) {
        event.preventDefault();
        var section = $(this).data("section");
        console.log('load');
        loadContent(section);
    });

    $('nav .nav-link:first').trigger('click');

    function loadContent(section) {

        // var root = document.location.hostname+':'+window.document.location.port;
        var root = 'http://' + document.location.hostname+':'+window.document.location.port;

        console.log(root);

        $.ajax({
            url: root + "/loader.php?data=" + section,
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
