$("document").ready(function(e)
{
  // É executado quando é clicado na opção "Agendar dúvidas"
  $("#duvida").off("click").off("click").click(function(e){
    load("html/prof/reserva.html");
  });
  // É executado quando é clicado na opção "Aula"
  $("#aula").off("click").off("click").click(function(e){
    load("html/prof/aula.html");
  });
  $("#visualizar").off("click").off("click").click(function(e){
    load("html/prof/visualizarReserva.html");
  });
});
//Função responsavel pelo display das salas
function LoadSalas(salas){
  var numeroDeSala = salas.length;
  for (var i = 0; i < numeroDeSala; i++) {
    $("#listaSalas").append('<Button type="button" style="white-space: normal;" class="sala btn btn-success btn-lg" id="'+salas[i]["nome"]+'">'+salas[i]["nome"]+'</Button> ');
  }
}
//Função que encontra o valor da sala
function findSala(selected){
  for (var i = 0; i < salas.length; i++) {
    if(salas[i]["nome"] == selected){
      salaSelected = salas[i];

    }
  }
}

function getAllReservasAluno(){
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
function remove1nr_slots_index(size){
  for (var j = 0; j < nr_slots_apagar.length; j++) {
    nr_slots_apagar[j]--;
  }
}
function existeReservaMesa(index_reserva,dataP,mesaId){//Recebe um id da mesa é verifica se já existe alguma reserva
  //para essa mesa i = index do reservas da mesma sala
//  console.log(mesaId,dataP,i);
    var dataA = reservas["aluno"][index_reserva]["data"];

    if(dataA == dataP){
    if(reservas_sala_aluno[index_reserva]["slot"].includes(mesaId) || reservas_sala_aluno[index_reserva]["slot"].includes(""+mesaId)){
      var beginA = reservas_sala_aluno[index_reserva]["begin"];
      var endA = reservas_sala_aluno[index_reserva]["end"];
      var beginP = $("#begin").val();
      var endP = $("#end").val();
      if((beginA <= beginP) && (endA >= beginP )){
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
function addReservaProf(sala,data,begin,end,slot){
  var prof = reservas["prof"];

  prof.push({
    "sala":sala,
    "data":data,
    "begin":begin,
    "end":end,
    "slot":slot
  });
//	var indiceProf=prof.length-1;
//	arraySlotsSala2.push({tipo:"prof",pos:indiceProf,slot:slot});
	
}

function setNotificaAluno(){

    alertas["aluno"] = PROF;

}
