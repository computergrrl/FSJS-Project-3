
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

          /* Then check and if the checkbox is disabled then enable it and visa versa */
          if($activities.eq(itemNumber).prop("disabled")) {
             $activities.eq(itemNumber).prop("disabled" , false);

         } else if($activities.eq(itemNumber).prop("disabled" , false)) {
               $activities.eq(itemNumber).prop("disabled" , true);
           }

       }
    }

activitiesToggler("js-frameworks" , 3);
activitiesToggler("express" , 1);
activitiesToggler("js-libs" , 4);
activitiesToggler("node" , 2);


});




////////////////////////////
