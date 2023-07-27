<?php


function send($phone_number, $message){
    $url = 'https://api.ultramsg.com/instance41546/messages/chat';
    $data = array(
        'token' => "zshfdy3mb07hg8uf",
        'to' => "+201007415843",
//        'to' => "+2$phone_number",
        'body' => $message,
        'priority' => 1,
        'referenceId' => '',
        'msgId' => '',
        'mentions' => '',
    );

    $options = array(
        'http' => array(
            'header'  => "Content-type: application/x-www-form-urlencoded\r\n",
            'method'  => 'POST',
            'content' => http_build_query($data)
        )
    );
    $context  = stream_context_create($options);
    $result = file_get_contents($url, false, $context);
    if ($result === FALSE) {
        echo "Error: $result";
    }
    return;
}
