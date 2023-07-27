<?php
if ($_SERVER['REQUEST_METHOD'] == "POST"){
    require_once "ultra_msg_whatsapp.php";
    session_start();
    $fullname = $_POST['fullname'] ?? "غير محدد";
    $email = $_POST['email'] ?? "غير محدد";
    $phone = $_POST['phone'] ?? "غير محدد";
    $formal_day = $_POST['formal_day'] ?? "غير محدد";
    $formal_month = $_POST['formal_month'] ?? "غير محدد";
    $formal_year = $_POST['formal_year'] ?? "غير محدد";
    $informal_day = $_POST['informal_day'] ?? "غير محدد";
    $informal_month = $_POST['informal_month'] ?? "غير محدد";
    $informal_year = $_POST['informal_year'] ?? "غير محدد";
    $day = $_POST['day'] ?? "غير محدد";
    $hall_name = $_POST['hall_name'] ?? "غير محدد";
    $service = $_POST['selected_service'] ?? "غير محدد";
    $msg = $_POST['message'] ?? "غير محدد";
    $extra_service = [];
    foreach ($_POST['extra_service'] as $item){
        $extra_service[] = $item;
    }
    $extra_service = implode(', ', $extra_service);


    $message = "مرحبا $fullname
لقد تم تقديم طلب الحجز بنجاح,
البيانات الخاصة بالطلب:-

البريد الإلكتروني:- $email
رقم الهاتف:- $phone
اليوم بالتاريخ الميلادي:- $formal_day
الشهر بالتاريخ الميلادي:- $formal_month
السنة بالتاريخ الميلادي:- $formal_year
اليوم بالتاريخ الهجري:- $informal_day
الشهر بالتاريخ الهجري:- $informal_month
السنة بالتاريخ الهجري:- $informal_year
اليوم:- $day
اسم القاعة:- $hall_name
الخدمات المختارة:- $service
الخدمات الإضافية:- $extra_service
رسالتك:- $msg


سيتم الرد علي رسالتك في اقرب وقت ممكن
    ";

    send(111, $message);
    $_SESSION['success'] = "تم تقديم طلب الحجز بنجاح";
    header("Location:".$_SERVER['HTTP_REFERER']);
//    echo "$fullname <br> $email <br> $phone <br> $formal_day <br> $formal_month <br> $formal_year <br> $informal_day <br> $informal_month <br> $informal_year <br> $extra_service <br> $day <br> $hall_name <br> $service <br> $message";

}else{
    echo "Failed";
}