
const $inputName = $('#name');

//auto focus on name field upon page load
$inputName.focus();

const $jobTitle = $('#title');

//event listener to add text box if "other" is selected in dropdown menu
$jobTitle.on('change' , function(){

    const $selected = $('#title option:selected').val();

    console.log($selected);

    if ($selected === 'other') {

       //console.log('You selected "Other!"')

    $jobTitle.append('<input type="text">');


    }



});
