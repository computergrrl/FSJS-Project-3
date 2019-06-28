
/***************************Job Role Section***************************/

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

/***********************T-Shirt Info Section ****************************/

const $shirtTheme = $('#design');
const $shirtColors = $('#colors-js-puns option');


//event listener to detect change in the dropdown menu
$shirtTheme.on('change' , function(){


          //set a variable to the value of option selected in from dropdown
          const $theme = $('#design option:selected').val();

              if($theme === 'js puns') {

                  $shirtColors.eq(0).prop('selected' , 'true');


                  //show the first 3 and hide the last 3
                  $shirtColors.eq(3).hide();
                  $shirtColors.eq(4).hide();
                  $shirtColors.eq(5).hide();
                  $shirtColors.eq(0).show();
                  $shirtColors.eq(1).show();
                  $shirtColors.eq(2).show();



              } else if($theme === 'heart js') {


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

/**********************Activities Section *******************************/

const $activities = $('.activities input');
const $labels = $('.activities label');
const $act = $('.activities');

//create and append a p and span to display total cost in
const $showTotal = $('<p>Total Cost: $ <span id="totalCost"></span></p>');
$act.append($showTotal);


//function for when there's a change in the activities section
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

/********************* Payment Information Section *********************/

// const $divCC = $('#cc-num');
// const $ccValidator = $('');
// $divCC.append($ccValidator);

const $paymentDiv = $('#credit-card label');
const $tester = $('<span class="tooltip"> Must be 13-16 numbers only</span>');
const $tester2 = $('<span class="tooltip"> Do this other thing</span>');
const $tester3 = $('<span class="tooltip"> Do one more thing</span>');
const $ccInput = $('#cc-num');


$paymentDiv.eq(0).append($tester);
$tester.hide();
$paymentDiv.eq(1).append($tester2);
$tester2.hide();
$paymentDiv.eq(2).append($tester3);
$tester3.hide();

function ccValidate(cc) {
    return /^\d{13,16}$/.test(cc);
}



$ccInput.on('keyup', function(){
    const cc = $ccInput.val();
      if(!ccValidate(cc))  {


      $tester.show();
    }  else {
        $tester.hide();
        $ccInput.css("border" , "none");
    }

    console.log(cc);

});
 //check validation again if they switch to different input field
  $ccInput.on('blur' , function(){

      const cc = $ccInput.val();

          if(ccValidate(cc) || cc == "")  {
              $tester.hide();
              $ccInput.css("border" , "none");
        }  if (!ccValidate(cc)) {
            $ccInput.css("borderColor" , "#B22222");

          }


});





///////////////////
