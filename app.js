$(function() {
	onBoard.init([
    {
      mediaUrl: 'images/step1.png',
      caption: 'Sign in with your username and password to use our service.'
    },
    {
      mediaUrl: 'images/step2.png',
      caption: 'Click on the green check button to save your changes.'
    },
    {
      mediaUrl: 'images/step3.png',
      caption: 'You have to do all 3 steps, to get to step 4'
    },
    {
      mediaUrl: 'images/step2.png',
      caption: 'And this is where step 4 is'
    }
  ]);

  $.fn.moveCursorToEnd = function () {
    var $input = $(this);

    if ($input.is('input, textarea')) {
      // This is a hack to move the cursor to the end of an input
      var val = $input.val(); //store the value of the $element
      $input.val(''); //clear the value of the $element
      $input.val(val); //set that value back.
    }
  };
});