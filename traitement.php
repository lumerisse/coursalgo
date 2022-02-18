    <?php
    echo($_POST["pseudo"]);
    echo($_POST["date"]);
    


    
    $aujourdhui = date("Y-m-d");
    $diff = date_diff(date_create($_POST["date"]), date_create($aujourdhui));
    echo 'Votre age est '.$diff->format('%y');

    if($diff->format('%y') <18){
        echo"tu et mineur";
        header ('Location:https://www.gulli.fr/ <ital>mapage.php</ital>'); 
    }
     else {
        echo "tu es majeur";
         header ('Location:https://www.amazon.fr/gp/aws/cart/add.html?<ital>mapage.php</ital>'); 
    }



    ?>