<html lang="en">
<body>
    
<?php
if ($_SERVER["REQUEST_METHOD"] == "GET") {
    // Retrieve form data
    $jumpo = isset($_GET['jumpo'])?$_GET['jumpo']:-1;
    $phonenum = isset($_GET['phonenum'])?$_GET['phonenum']:-1;
    $opentime = isset($_GET['opentime'])?$_GET['opentime']:-1;
    $closetime= isset($_GET['closetime'])?$_GET['closetime']:-1;
    $eathere = isset($_GET['eathere'])?$_GET['eathere']:-1;
    $takeout = isset($_GET['takeout'])?$_GET['takeout']:-1;
    $delivery = isset($_GET['delivery'])?$_GET['delivery']:-1;
    $else = isset($_GET['else'])?$_GET['else']:-1;
    $cash = isset($_GET['cash'])?$_GET['cash']:-1;
    $card = isset($_GET['card'])?$_GET['card']:-1;
    $poucher = isset($_GET['poucher'])?$_GET['poucher']:-1;
    $localmoney = isset($_GET['localmoney'])?$_GET['localmoney']:-1;
    $option1 = isset($_GET['option1'])?$_GET['option1']:-1;
    $option2 = isset($_GET['option2'])?$_GET['option2']:-1;
    $option3 = isset($_GET['option3'])?$_GET['option3']:-1;
    $option4 = isset($_GET['option4'])?$_GET['option4']:-1;
    $option5 = isset($_GET['option5'])?$_GET['option5']:-1;

    // Display the submitted data
    echo "jumpo: " . $jumpo . "<br>";
    echo "phonenum: " . $phonenum . "<br>";
    echo "opentime: " . $opentime . "<br>";
    echo "closetime: " . $closetime . "<br>";
    echo "eathere: " . $eathere . "<br>";
    echo "takeout: " . $takeout . "<br>";
    echo "delivery: " . $delivery . "<br>";
    echo "else: " . $else . "<br>";
    echo "cash: " . $cash . "<br>";
    echo "card: " . $card . "<br>";
    echo "poucher: " . $poucher . "<br>";
    echo "localmoney: " . $localmoney . "<br>";
    echo "option1: " . $option1 . "<br>";
    echo "option2: " . $option2 . "<br>";
    echo "option3: " . $option3 . "<br>";
    echo "option4: " . $option4 . "<br>";
    echo "option5: " . $option5 . "<br>";
}
?>
</body>
</html>