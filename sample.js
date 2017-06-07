$('#your-pass').bind('input', function() {
   var pass = $(this).val();
    $('#output').html("Your password is " + pass + "." + " Correct?");
});