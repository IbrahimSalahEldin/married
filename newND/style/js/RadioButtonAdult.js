$elm = $("input[name='teenager']:checked");
user_form($elm.val());
function user_form(val_user){
    $('#submit_card').removeClass("d-none");
    $('#young').removeClass("show");
    $('#adult').removeClass("show");
    $btn_elm_1 = $('#user_exist_btn');
    $btn_elm_2 = $('#create_user_btn');
    if(val_user == 0){
        $btn_elm_2.click();
        RequiredInputs(0);
    }else if(val_user == 1){
        $btn_elm_1.click();
        RequiredInputs(1);
    }
}
