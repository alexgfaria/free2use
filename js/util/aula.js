var   selected = -1;
var beginP;
var endP;
var dataA;
var dataP;
$("document").ready(function(e){

  $("#dataHora").append("<input id='begin' type='text'> <input id='end' type='text'> <input id='data' type='date'>");
  LoadSalas(salas);
  $(".sala").click(function(e){
    selected = e.target.id;
    beginP = $("#begin").val();
    endP = $("#end").val();
    dataP = $("#data").val();

    load("html/util/reservaAula.html");
  });
});
