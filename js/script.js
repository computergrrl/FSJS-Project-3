
/******************************************************************
                            JOB ROLE SECTION
********************************************************************/

const $inputName = $('#name');
const $jobRole = $('#other-title');



//hide other job Role input field
$jobRole.hide();


//auto focus on name field upon page load
$inputName.focus();

const $jobTitle = $('#title');

//event listener to add text box if "other" is selected in dropdown menu
$jobTitle.on('change' , function(){

          //set a variable to the value of option selected in from dropdown
          const $selected = $('#title option:selected').val();

          //if "other" is selected then show hidden field
          if ($selected === 'other') {

          $jobRole.show();

         //if any other option is selected hide the extra text field
      }  else {
          $jobRole.hide();
      }

});

/*******************************************************************
                        T-SHIRT INFO SECTION
 ********************************************************************/

const $shirtTheme = $('#design');
const $theme = $('#design option:selected').val();
const $shirtColors = $('#colors-js-puns option');
const $shirtColorsMenu = $('#colors-js-puns');

if($theme === 'Select Theme') {
    $shirtColorsMenu.hide();
}
//event listener to detect change in the dropdown menu
$shirtTheme.on('change' , function(){


          //set a variable to the value of option selected in from dropdown
          const $theme = $('#design option:selected').val();

              if($theme === 'js puns') {
                  $shirtColorsMenu.show();
                  $shirtColors.eq(0).prop('selected' , 'true');


                  //show the first 3 and hide the last 3
                  $shirtColors.eq(3).hide();
                  $shirtColors.eq(4).hide();
                  $shirtColors.eq(5).hide();
                  $shirtColors.eq(0).show();
                  $shirtColors.eq(1).show();
                  $shirtColors.eq(2).show();



              } else if($theme === 'heart js') {

                    $shirtColorsMenu.show();
                    $shirtColors.eq(3).prop('selected' , 'true');

                    //show the last 3 and hide the first 3
                    $shirtColors.eq(0).hide();
                    $shirtColors.eq(1).hide();
                    $shirtColors.eq(2).hide();
                    $shirtColors.eq(3).show();
                    $shirtColors.eq(4).show();
                    $shirtColors.eq(5).show();

                //otherwise show all shirt color options
              }  else {

                     $shirtColors.show();
              }


          });

/*******************************************************************
                        ACTIVITIES SECTION
******************************************************************/

const $activities = $('.activities input');
const $labels = $('.activities label');
const $act = $('.activities');

//create and append a p and span to display total cost in
const $showTotal = $('<p>Total Cost: $ <span id="totalCost"></span></p>');
$act.append($showTotal);


//event listener for when there's a change in the activities section
$activities.on('change', function(e){

/************************************
FUNCTION TO ENABLE/DISABLE ACTIVITIES
***********************************/
    function activitiesToggler(inputName, itemNumber) {
    //checks if checked box has name equal to inputName argument
        if(e.target.getAttribute('name') === inputName) {

          /* If checkbox name equals inputName then toggle the css "disabled" class that I added to styles.css page */
              $labels.eq(itemNumber).toggleClass("disabled");

            /* Then check if the checkbox is disabled. If it is enable it and if it's already enabled then disable it*/
          if($activities.eq(itemNumber).prop("disabled")) {
             $activities.eq(itemNumber).prop("disabled" , false);

         } else if($activities.eq(itemNumber).prop("disabled" , false)) {
               $activities.eq(itemNumber).prop("disabled" , true);
           }

         }
    }
    /* run the activitiesToggler function on all 4 boxes which might conflict and enable or disable them accordingly */
    activitiesToggler("js-frameworks" , 3);
    activitiesToggler("express" , 1);
    activitiesToggler("js-libs" , 4);
    activitiesToggler("node" , 2);


      //create variable named total to store total price
      let total = 0;

      //if the first item is checked then add 200 to total
      const $main = $('#main');
      if ($main.prop("checked")) {
          total += 200;
      }
      /*
      loop through all the remaining check boxes to determine total. If checkbox is checked then add 100 to the total (start loop at i = 1 since we want to skip the first item in the list and the list is zero-indexed)
      */
      for (let i =1; i <= $activities.length; i++) {
           if ($activities.eq(i).prop("checked")) {
             total += 100;
           }
      }
      //update the total
      $('#totalCost').text(total);


});

/********************************************************************
                        PAYMENT INFO SECTION
*********************************************************************/

//input variables
const $cardDiv = $('#credit-card')
const $cardInfo = $('#credit-card label');
const $ccInput = $('#cc-num');
const $zipInput = $('#zip');
const $cvvInput = $('#cvv')
const $payment = $('#payment');
const $pTags = $('div p');


$pTags.eq(1).hide();
$pTags.eq(2).hide();

  $payment.on('change' , function(){


    const $paymentMethod = $('#payment option:selected').val();
    if($paymentMethod === 'paypal') {
       $cardDiv.hide();
       $pTags.eq(2).hide();
       $pTags.eq(1).show();

    } else if($paymentMethod === 'bitcoin') {
       $cardDiv.hide();
       $pTags.eq(1).hide();
       $pTags.eq(2).show();
    }  else {
        $pTags.eq(1).hide();
        $pTags.eq(2).hide();
    }

  });



//the warning variables
const $ccWarning = $('<span class="tooltip"> <b>Numbers only</b> Must be 13-16 digits </span>');
const $warning2 = $('<span class="tooltip"> <b>*Required*</span>');
const $zipWarning = $('<span class="tooltip"> Must be 5 digits <b>Numbers only</b></span>');
const $cvvWarning = $('<span class="tooltip"> Can only be 3 digits<b>Numbers only</b></span>');


//append all of the warnings but hide them initially
$cardInfo.eq(0).append($ccWarning);
$ccWarning.hide();
$cardInfo.eq(0).append($warning2);
$warning2.hide();
$cardInfo.eq(1).append($zipWarning);
$zipWarning.hide();
$cardInfo.eq(2).append($cvvWarning);
$cvvWarning.hide();


/*********************
 VALIDATION FUNCTIONS
***********************/

//function for validating whether credit card is numbers only 13-16 digits
function ccValidate(cardNumber) {
    return /^\d{13,16}$/.test(cardNumber);
}

//function for validating zip code is numbers only - 5 digits
function zipValidate(zip) {
    return /^\d{5}$/.test(zip);
}

//function for validating zip code is numbers only - 5 digits
function cvvValidate(cvv) {
    return /^\d{3}$/.test(cvv);
}

/*  function to check validations whenever a change is detected in input field  */
function inputChange(validationFunction, warning, warning2, value, input){

      //hide the *Required* warning if it's not already
      warning2.hide();

      /*if value doesn't match the reg expression test from whatever validator function is passed in then show the warning message */
      if(!validationFunction(value) && value !== "")  {
      warning.show();
      input.css("borderColor" , "red");

      //hide the warning message if value entered either matches criteria or if the field is blank or delet
    }  else if(validationFunction(value) || value === "") {
        warning.hide();
        input.css("borderColor" , "transparent");
    }
}

/* Function to remind users that field is required if they move away from that input and haven't yet met validation criteria  */
function onInputBlur(validationFunction, warning, value){

         if(!validationFunction(value) && value === "") {
           warning.show();
         }
    }

/*********************
CREDIT CARD VALIDATION
**********************/

//event listener for credit card field
$ccInput.on("change keyup focus" , function () {

      //assign a variable to credit card input field value
      const $cardValue = $ccInput.val();

      //calling 1st validation function
      inputChange(ccValidate, $ccWarning, $warning2, $cardValue, $ccInput);

});


$ccInput.on("blur" , function() {
      //assign variable to credit card input field value
      const $cardValue = $ccInput.val();

      //call 2nd validation function
      onInputBlur(ccValidate, $warning2, $cardValue);

});


/*********************
ZIP CODE VALIDATION
**********************/

//event listener for credit card field
$zipInput.on("change keyup" , function () {

      //assign a variable to credit card input field value
      const $zipValue = $zipInput.val();

      //calling 1st validation function
      inputChange(zipValidate, $zipWarning, $warning2, $zipValue, $zipInput);

});

/*********************
CCV CODE VALIDATION
**********************/

//event listener for credit card field
$cvvInput.on("change keyup" , function () {

      //assign a variable to credit card input field value
      const $cvvValue = $cvvInput.val();

      //calling 1st validation function
      inputChange(cvvValidate, $cvvWarning, $warning2, $cvvValue, $cvvInput);

});












//////////////////////
