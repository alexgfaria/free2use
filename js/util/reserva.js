var selected = -1;
//var salas = ["1", "32", "12","14","412"];
$("document").ready(function(e){

  LoadSalas(salas);
    $(".sala").off("click").off("click").click(function(e){
      selected = e.target.id;

      load("html/util/sala.html");
    });
});
