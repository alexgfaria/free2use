var salaSelected;//Sala que foi selacionada
var nr_slots_ocupados = [];//Lugares ocupados de uma sala
var tecnico;
$("#document").ready(function(e){

  $("#titulo").append("Escolha um lugar na "+selected);


  findSala(selected);//encontra a sala selacionada

  LoadMesas();
  getAllMesasOcupadasTecnico();
  removeMesasOcupadas();
  $("#submit").click(function(e){

    var quantidade_lugares = salaSelected["nr_slots"];


    //Verifica as opções que foram selacionadas
    for(var i = 0;i <= quantidade_lugares; i++){
      var selected_option = $('#'+i).is(":checked");
      if(selected_option){//Se a opção foi selacionda verfica se existe conflito
        if(existeReservaMesa(i)){
          alert("Já existe reserva");
        }
      }
    }

  });
});

function findSala(selected){
  for (var i = 0; i < salas.length; i++) {
    if(salas[i]["nome"] == selected){
      salaSelected = salas[i];

    }
  }
}

function LoadMesas(){
   var size = salaSelected["nr_slots"];
   for(var i = 0;i <= size; i++){
     //$("#lista_Lugares").append(i);

     $("#lista_Lugares").append("<div class='checkbox'>"+"<label> <input type='checkbox' id ='"+i+"'>"+
     "Lugar   " +i+"</label>"+"</div>");
   }
   $("#lista_Lugares").append('<Button type="button" class="sala btn btn-success btn-lg" id="submit">'+"Reservar"+'</Button>');

}
/*
function getAllMesasOcupadasAluno(){
  var id = salaSelected["nome"];
  for (var i = 0; i < reservas["aluno"].length; i++) {
    aluno = reservas["aluno"][i];
    if(aluno["sala"] == id){
      nr_slots_ocupados.push(aluno["slot"]);
    }
  }
}*/

function getAllMesasOcupadasTecnico(){
  var id = salaSelected["tecnico"];
  for (var i = 0; i < reservas["tecnico"].length; i++) {
    tecnico = reservas["tecnico"][i];
    if(tecnico["tecnico"] == id){
      nr_slots_ocupados.push(tecnico["slot"]);
    }
  }
}

function removeMesasOcupadas(){
  var conjunto_mesa;
  for(var i = 0; i<nr_slots_ocupados.length; i++){
    conjunto_mesa = nr_slots_ocupados[i];
    for(var j = 0; j<conjunto_mesa.length;j++){
      $("#"+conjunto_mesa[j]).attr("disabled","true");
    }
  }
}
function setNotificaAluno(){
  alertas["aluno"] = true;
}
function existeReservaMesa(mesaId){//Recebe um id da mesa é verifica se já existe alguma reserva
  //para essa mesa
  for (var i = 0; i < nr_slots_ocupados.length; i++) {
    if(nr_slots_ocupados[i].includes(mesaId)){
      return true;
    }else{
      return false;
    }
  }
}
