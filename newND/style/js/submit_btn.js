function submit_action(){
    $invalids_inputs = $('.is-invalid');
    if($invalids_inputs.length == 0){
        $("#sub-btn-hidden").click();
    }else{
        console.log("Invalids:- ("+ $invalids_inputs.length +")");
    }
}
