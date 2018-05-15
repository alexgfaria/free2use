$("document").ready(function(e)
{
  // É executado quando é clicado na opção "Agendar dúvidas"
  $("#duvida").click(function(e){
    load("html/util/reserva.html");
  });
  // É executado quando é clicado na opção "Aula"
  $("#aula").click(function(e){
    load("html/util/aula.html");
  });
  $("#visualizar").click(function(e){
    load("html/util/visualizarReserva.html");
  });
});
function LoadSalas(salas){
  var numeroDeSala = salas.length;
  for (var i = 0; i < numeroDeSala; i++) {

    $("#listaSalas").append('<Button type="button" class="sala btn btn-success btn-lg" id="'+salas[i]["nome"]+'">'+salas[i]["nome"]+'</Button>');
  }
}
function findSala(selected){
  for (var i = 0; i < salas.length; i++) {
    if(salas[i]["nome"] == selected){
      salaSelected = salas[i];

    }
  }
}
function getAllMesasOcupadasAluno(){
  var id = salaSelected["nome"];

  for (var i = 0; i < reservas["aluno"].length; i++) {
    aluno = reservas["aluno"][i];


    if(aluno["sala"] == id){
      reservas_sala_aluno.push(aluno);
      nr_slots_index.push(i);

    }
  }
}
function removeReserva(index){//Remove todas as reservas

    reservas["aluno"].splice(index,1);
    remove1nr_slots_index();//Para diminuir 1 salar é todas as posições, porque foi remove 1 posição

  //nr_slots_index = [];
}
function remove1nr_slots_index(){
  for (var j = 0; j < nr_slots_index.length; j++) {
    nr_slots_index[j]--;
  }
}
function existeReservaMesa(mesaId,dataP,i){//Recebe um id da mesa é verifica se já existe alguma reserva
  //para essa mesa



      var dataA = reservas_sala_aluno[i]["data"];
    if(dataA == dataP){
    if(reservas_sala_aluno[i]["slot"].includes(mesaId)){

      var beginA = reservas_sala_aluno[i]["begin"];
      var endA = reservas_sala_aluno[i]["end"];
      var beginP = $("#begin").val();
      var endP = $("#end").val();
      if((beginA < beginP) && (endA >= beginP )){
        return true;
      }else{
        if((beginA >= beginP) && (beginA <= endP)){
          return true;
        }else{
          return false;
        }
      }
    }else{
      return false;
    }
  }else{
    return false;
  }

}

function existeReservaMesaAula(dataP,i){//Recebe um id da mesa é verifica se já existe alguma reserva
  //para essa mesa

    var dataA = reservas_sala_aluno[i]["data"];

    if(dataA == dataP){
      var beginA = reservas_sala_aluno[i]["begin"];
      var endA = reservas_sala_aluno[i]["end"];
      if((beginA < beginP) && (endA >= beginP )){
        return true;
      }else{
        if((beginA >= beginP) && (beginA <= endP)){
          return true;
        }else{
          return false;
        }
      }
  }else{
    return false;
  }

}
