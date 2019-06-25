
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


              }  else {

                     $shirtColors.show();
              }


          });

/**********************Activities Section *******************************/
const $activities = $('.activities input');
const $labels = $('.activities label');


//labels 7-13
$activities.on('change', function(e){
   console.log(e.target);
   if(e.target == '<input type="checkbox" name="js-frameworks">') {
    $labels.eq(3).toggleClass("disabled");

   }

});




////////////////////////////
