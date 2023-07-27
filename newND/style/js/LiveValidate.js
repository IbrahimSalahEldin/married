function InputValidateMaxLength($input_name, $length){
    $elm = $("input[name='"+$input_name+"']");
    $elm_length = $("input[name='"+$input_name+"']").val().length;
    if($elm_length == $length){
        $elm.removeClass('is-invalid')
        $elm.removeClass('is-valid')
        $elm.addClass('is-valid')
    }else{
        $elm.removeClass('is-invalid')
        $elm.removeClass('is-valid')
        $elm.addClass('is-invalid')
    }
}
function InputValidateMinMax($input_name, $min, $max){
    $elm = $("input[name='"+$input_name+"']");
    $elm_length = $("input[name='"+$input_name+"']").val().length;
    if($elm.val() <= $max && $elm.val() >= $min){
        $elm.removeClass('is-invalid')
        $elm.removeClass('is-valid')
        $elm.addClass('is-valid')
    }else{
        $elm.removeClass('is-invalid')
        $elm.removeClass('is-valid')
        $elm.addClass('is-invalid')
    }
}
function InputValidateInteger($input_name, $length=250, $min=0, $max=999999999999){
    $elm = $("input[name='"+$input_name+"']");
    // if ($elm.hasAttr('required')){
    //     alert("required");
    // }else{
    //     alert("optional");
    // }
    if ($elm.val() == "" || $elm.val() == null){
        $elm.removeClass('is-invalid')
        $elm.removeClass('is-valid')
        $elm.addClass('is-invalid')
    }else{
        if($.isNumeric($elm.val()) == true){
            $elm.removeClass('is-invalid')
            $elm.removeClass('is-valid')
            $elm.addClass('is-valid')
            if(typeof($elm.attr('maxlength')) != "undefined"){
                InputValidateMaxLength($input_name, $length)
            }
            if(typeof($elm.attr('max')) != "undefined"){
                InputValidateMinMax($input_name, $min, $max)
            }
        }else{
            $elm.removeClass('is-invalid')
            $elm.removeClass('is-valid')
            $elm.addClass('is-invalid')
        }
    }
}
function InputValidateString($input_name, $length=250, $min=0, $max=999999999999){
    $elm = $("input[name='"+$input_name+"']");
    // if ($elm.attr('optional')){
    //     alert("optional");
    // }else{
    //     alert("required");
    // }
    if ($elm.val() == "" || $elm.val() == null){
        $elm.removeClass('is-invalid')
        $elm.removeClass('is-valid')
        $elm.addClass('is-invalid')
    }else{
        if($.isNumeric($elm.val()) == true){
            $elm.removeClass('is-invalid')
            $elm.removeClass('is-valid')
            $elm.addClass('is-invalid')
        }else{
            $elm.removeClass('is-invalid')
            $elm.removeClass('is-valid')
            $elm.addClass('is-valid')
            if(typeof($elm.attr('maxlength')) != "undefined"){
                InputValidateMaxLength($input_name, $length)
            }
            if(typeof($elm.attr('max')) != "undefined"){
                InputValidateMinMax($input_name, $min, $max)
            }
        }
    }
}
