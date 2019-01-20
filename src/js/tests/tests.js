// Check responsive behavior
if ($(window).width() != $(document).width()) {
    var maxWidth = 0;
    var widestSpan = null;
    var $element;
    $('*').each(function() {
        $element = $(this);
        if ($element.width() > maxWidth) {
            maxWidth = $element.width();
            widestSpan = $element;
        }
    });
    // alert('Page is not responsive. Check console for object at fault');
    console.log('The object at fault is:');
    console.log(widestSpan[0]);
}

// Disable all links during testing.
$("a[href='#']").attr('href', 'javascript:void(0)');
// $('a').attr('href', 'javascript:void(0)');

// Get all fields in a contact form for easy injection into php.
if ($('input').length > 1) {
    var inputFieldsArray = [];
    $('input,select,textarea').each(function() {
        inputFieldsArray.push($(this).attr('name'));
    });
    // Append variable identifier
    for (var i = 0; i < inputFieldsArray.length; i++) {
        inputFieldsArray[i] = '$' + inputFieldsArray[i];
    }
    // Change commas into =
    inputFieldsArray = inputFieldsArray.join(' = ');
    // Add the end of the variable decleration
    inputFieldsArray = inputFieldsArray + ' = "";';
    inputFieldsArray = inputFieldsArray.replace(/\$undefined = /g, '');
    console.log('The input fields are: \r\n\r\n' + inputFieldsArray);
}
