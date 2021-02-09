
$( function() {
    $( "#draggable" ).draggable();
  } );

$(document).ready(function(){
    $("#fruits").sortable({connectWith:"vegetables"});
    $("#vegetables").sortable({connectWih:"fruits"});
});




