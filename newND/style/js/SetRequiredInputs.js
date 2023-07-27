function RequiredInputs($val){
    if($val == 0){
        $("input, select").attr('required', '')
        $("input[type=checkbox], input[type=email]").removeAttr("required");
    }
}
