/* User experience animations. Dependencies include the jQuery library, Waypoints plugin and Visibility plugin. */
$(document).ready(function() {
    $('.background').css('height', $(window).height() + 'px');
    enableResize();
});

function enableResize() {
    $(window).on('resize', function(event) {
        $('.background').css('height', $(window).height() + 'px');
    });
}