var salas = ["true", "false", "true","false","false"];
$("#document").ready(function(e){
  $("#titulo").append("Escolha um lugar na sala "+selected);
  LoadMesas(salas);

  $("#submit").click(function(e){
    var size = salas.length;
    for(var i = 0;i <= size; i++){
      var selected_option = $('#'+i).is(":checked");
      
    }
  });
});

function LoadMesas(salas){
   var size = salas.length;
   for(var i = 0;i <= size; i++){
     //$("#lista_Lugares").append(i);
     $("#lista_Lugares").append("<div class='checkbox'>"+"<label> <input type='checkbox' id ="+i+">"+
     i+"</label>"+"</div>");
   }
   $("#lista_Lugares").append('<Button type="button" class="sala btn btn-success btn-lg" id="submit">'+"Reservar"+'</Button>');
}
