
/*************************************************************************
                          SUBMITTING THE FORM
*************************************************************************/
const $registerButton = $('button');

$registerButton.click(function(e){


    if ($('#totalCost').text() === "") {
        e.preventDefault();
        $activities.focus();
        $activitiesWarning.show();

    } else if($inputName.val() === "") {
       e.preventDefault();
       $inputName.focus();
       $nameWarning.show();

    }  else if($email.val() === "") {
       e.preventDefault();
       $email.focus();
       $emailWarning2.show();

}

});






//////////////////////
