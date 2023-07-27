$(function() {
    $( "form" ).submit(function() {
        $('#submit_btn').css('display', 'none');
        $('#save_btn').css('display', 'none');
        $('#loader').css('display', 'block');
    });
});
