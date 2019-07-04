
/*************************************************************************
                          SUBMITTING THE FORM
*************************************************************************/
const $registerButton = $('button');

$registerButton.click(function(e){


    if ($('#totalCost').text() === "") {
        e.preventDefault();
        $activities.focus();
        $activitiesWarning.show();

    }  else if($inputName.val() === "") {
       e.preventDefault();
       $inputName.focus();
       $nameWarning.show();

    }  else if($email.val() === "") {
       e.preventDefault();
       $email.focus();
       $emailWarning2.show();

    }  else if ($payment.val() === 'select_method' ||
       $payment.val() === 'credit card') {


            if($ccInput.val() === "") {
              e.preventDefault();
              $ccInput.focus();
              $ccWarning2.show();

          }  else if(!ccValidate($ccInput.val())) {
             e.preventDefault();
             $ccInput.focus();
             $ccWarning.show();

          }  else if($zipInput.val() === "") {
             e.preventDefault();
             $zipInput.focus();
             $zipWarning2.show();

          }  else if(!zipValidate($zipInput.val())) {
             e.preventDefault();
             $zipInput.focus();
             $zipWarning.show();

          }  else if($cvvInput.val() === "") {
             e.preventDefault();
             $cvvInput.focus();
             $cvvWarning2.show();

          }  else if(!cvvValidate($cvvInput.val())) {
             e.preventDefault();
             $cvvInput.focus();
             $cvvWarning.show();

          }
    }

});






//////////////////////
