$(function() {
	onBoard.init([
    {
      mediaUrl: '/static/images/step1.png',
      caption: 'You can make edits to your headcount by selecting <b>Edit details</b> from the dropdown list on the right hand side.'
    },
    {
      mediaUrl: '/static/images/step2.png',
      caption: 'Click on the green check button to save your changes.'
    },
    {
      mediaUrl: '/static/images/step1.gif',
      caption: 'You have to do all 3 steps, to get to step 4'
    },
    {
      mediaUrl: '/static/images/step1.gif',
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