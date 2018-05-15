var salaSelected;//Sala que foi selacionada
var nr_slots_ocupadosTec = [];//Lugares ocupados de uma sala
var tecnico;

var aluno;
var reservas_sala_aluno = [];
var nr_slots_index = [];

var dataP;
$("#document").ready(function(e){

  $("#titulo").append("Escolha um lugar na "+selected);


  findSala(selected);//encontra a sala selacionada
  getAllMesasOcupadasAluno();
  LoadMesas();
  $("#submit").click(function(e){

    var quantidade_lugares = salaSelected["nr_slots"];
    dataP = $("#data").val();


    //Verifica as opções que foram selacionadas
    for(var i = 0;i <= quantidade_lugares; i++){

      var selected_option = $('#'+i).is(":checked");
      if(selected_option){//Se a opção foi selacionda verfica se existe conflito
        for (var j = 0; j < reservas_sala_aluno.length; j++){
        if(existeReservaMesa(i,dataP,j)){

          removeReserva(nr_slots_index[i]);
          setNotificaAluno();
        }
      }
      }
    }
    load("html/util/comfirma_reserva.html");
  });
});



function LoadMesas(){
   var size = salaSelected["nr_slots"];
   for(var i = 0;i <= size; i++){
     //$("#lista_Lugares").append(i);

     $("#lista_Lugares").append("<div class='checkbox'>"+"<label> <input type='checkbox' id ='"+i+"'>"+
     "Lugar   " +i+"</label>"+"</div>");

   }
    $("#lista_Lugares").append("<br> <input id='begin' type='text'> <br> <input id='end' type='text'><br> <input id='data' type='date'><br>");
    $("#lista_Lugares").append('<Button type="button" class="sala btn btn-success btn-lg" id="submit">'+"Reservar"+'</Button>');

}



function getAllMesasOcupadasTecnico(){
  var id = salaSelected["tecnico"];
  for (var i = 0; i < reservas["tecnico"].length; i++) {
    tecnico = reservas["tecnico"][i];
    if(tecnico["tecnico"] == id){
      nr_slots_ocupadosTec.push(tecnico["slot"]);
    }
  }
}

function removeMesasOcupadasCheckBox(){
  var conjunto_mesa;
  for(var i = 0; i<nr_slots_ocupadosTec.length; i++){
    conjunto_mesa = nr_slots_ocupados[i];
    for(var j = 0; j<conjunto_mesa.length;j++){
      $("#"+conjunto_mesa[j]).attr("disabled","true");
    }
  }
}

function setNotificaAluno(){

    alertas["aluno"] = PROF;

}
