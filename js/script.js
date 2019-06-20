
const $inputName = $('#name');
const $jobRole = $('#other-title');

//hide other job Role input field
$jobRole.hide();


//auto focus on name field upon page load
$inputName.focus();

const $jobTitle = $('#title');

//event listener to add text box if "other" is selected in dropdown menu
$jobTitle.on('change' , function(){

          const $selected = $('#title option:selected').val();

          if ($selected === 'other') {

          $jobRole.show();

      }

});
