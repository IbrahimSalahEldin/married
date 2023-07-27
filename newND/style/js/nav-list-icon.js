function flip_list(){
    $list_icon = $('.navbar-toggler .fa-bars');
    if($('.navbar-toggler').hasClass('collapsed')){
        $list_icon.css('transition', 'width 500ms linear, height 500ms linear');
        $list_icon.css('transition', 'all 200ms linear');
        $list_icon.css('transform', 'rotate(180deg)');
    }else{
        $list_icon.css('transition', 'width 500ms linear, height 500ms linear');
        $list_icon.css('transition', 'all 200ms linear');
        $list_icon.css('transform', 'rotate(90deg)');
    }
}
$('.navbar').click(function (){
    if ($(".collapse").hasClass("show")){
        var element = document.getElementById("navbarcollapse");
        element.classList.remove("show");
    }
})