// Select color input
// Select size input
var width, height, color;

// When size is submitted by the user, call makeGrid()
//Grid height and width are chosen and the grid is formed when the submit button is clicked.
$('#sizePicker').submit(function(grid) {
	event.preventDefault();
 	gridHeight = $('#inputHeight').val();
 	gridWidth = $('#inputWeight').val();
	makeGrid(gridHeight, gridWidth);

})



function makeGrid(x, y) {
	$("tr").remove(); //This code clears the grid when the submit button is clicked again

// Your code goes here!
for (var i = 1; i <= x; i++) {
	$('#pixelCanvas').append("<tr id=table" + i + "></tr>");
	for (var j = 1; j <= y; j++) {
  	 $('#table' + i).append("<td></td>");

  }
 }
  

   //To add desired color to the cells by clicking
   $('td').click(function pickColor(){
   	color = $('#colorPicker').val();

   	if($(this).attr('style')){
		$(this).removeAttr('style')
   	}else {
   		$(this).attr('style', 'background-color:' + color);
   	}
   })
}









