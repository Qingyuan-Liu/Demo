/**
 * Theme: Hyper - Responsive Bootstrap 4 Admin Dashboard
 * Author: Coderthemes
 * Toastr js
 */

//initializing main application module
! function($) {
    "use strict";

    // notification examples

    $("#toastr-one").on('click', function(e) {
        $.NotificationApp.send("Heads up!", "This alert needs your attention, but it is not super important.", 'top-right', 'rgba(0,0,0,0.2)', 'info');
    });

    $("#toastr-two").on('click', function(e) {
        $.NotificationApp.send("Heads up!", "Check below fields please.", 'top-center', 'rgba(0,0,0,0.2)', 'warning');
    });

    $("#toastr-three").on('click', function(e) {
        $.NotificationApp.send("Well Done!", "You've successfully selected the interview session on <br/><strong>Wed, March 13th</strong>   <a href='interview-progress.html'>Revoke</a>", 'top-left', 'rgba(0,0,0,0.2)', 'success');
    });

    $("#toastr-three").on('click', function() {
        // Change text of button element
        $("#toastr-three").html("Selected");
        document.getElementById("toastr-three").style.opacity = 0.5;
        $("#next").show();


    });

    $("#toastr-four").on('click', function(e) {
        $.NotificationApp.send("Oh snap!", "Change a few things up and try submitting again.", 'bottom-left', 'rgba(0,0,0,0.2)', 'error');
    });

    $("#toastr-five").on('click', function(e) {
        $.NotificationApp.send("How to contribute?", [
            'Fork the repository',
            'Improve/extend the functionality',
            'Create a pull request'
        ], 'top-right', 'rgba(0,0,0,0.2)', 'info');
    });

    $("#toastr-six").on('click', function(e) {
        $.NotificationApp.send("Can I add <em>icons</em>?", "Yes! check this <a href='https://github.com/kamranahmedse/jquery-toast-plugin/commits/master'>update</a>.",
            'top-right', 'rgba(0,0,0,0.2)', 'info', false);
    });

    $("#toastr-seven").on('click', function(e) {
        $.NotificationApp.send("", "Set the `hideAfter` property to false and the toast will become sticky.", 'top-right', 'rgba(0,0,0,0.2)', 'success');
    });

    $("#toastr-eight").on('click', function(e) {
        $.NotificationApp.send("", "Set the `showHideTransition` property to fade|plain|slide to achieve different transitions.",
            'top-right', 'rgba(0,0,0,0.2)', 'info', 3000, 1, 'fade');
    });
}(window.jQuery);