var salaSelected;//Sala que foi selacionada
var nr_slots_ocupadosTec = [];//Lugares ocupados de uma sala
var tecnico;

var aluno;
var reservas_sala_aluno = [];
var nr_slots_index = [];
var nr_slots_apagar = [];
var slotProf = [];
var dataP;
$("document").ready(function(e){
  $("#lista_Lugares").append("<h3>Lista de lugares - "+selected+"</h3>");


  findSala(selected);//encontra a sala selacionada
  getAllReservasAluno();//encontra todas as reservas na naquela determinda sala
  LoadMesas();//Display das mesas
  $(".bSlot").off("click").click(function() {

    if($(this).attr("class")==="btn btn-success bSlot")
    {
      $(this).removeClass();
      $(this).addClass("btn btn-danger bSlot");
    }
  });
  $("#submit").off("click").off("click").click(function(e){

    var quantidade_lugares = salaSelected["nr_slots"];
    dataP = $("#data").val();//Set da data do professor para a reserva
    beginP = $("#begin").val();
    endP = $("#end").val();
  
    if(isEmpty(beginP,endP,dataP)) return;

    //Verifica as opções que foram selacionadas
    for(var i = 1;i <= quantidade_lugares; i++){

      var selected_option = $('#bSlot'+i).attr("class")==="btn btn-danger bSlot";
      if(selected_option){//Se a opção foi selacionda verfica se existe conflito
        //Para todas as reservas da determnda sala,verifica se existe conflito nas horas das reservas
        var tamanho = reservas_sala_aluno.length;

        for (var j = 0; j < tamanho; j++){
//          console.log(j+""+i);
          if(existeReservaMesa(j,dataP,i)){
            if(!nr_slots_apagar.includes(nr_slots_index[j])){
              nr_slots_apagar.push(nr_slots_index[j]);
            }
          }
        }
        if(!slotProf.includes(i)){
          slotProf.push(i);
        }
      }
    }
    var size  = nr_slots_apagar.length;
    for (var i = 0; i < size; i++) {
     //console.log(nr_slots_apagar[i]);
      removeReserva(nr_slots_apagar[i]);//Caso exista conflito remove a reserva do aluno
      setNotificaAluno();
    }

    addReservaProf(selected,$("#data").val(),$("#begin").val(),$("#end").val(),slotProf);
    load("html/prof/comfirma_reserva.html");
  });
});


//Função responsavel do display
function LoadMesas(){
   var size = salaSelected["nr_slots"];

   var nrLugaresFila=8;
 	for(var i=1;i<=size;i++)
 	{
 		if(nrLugaresFila==0)
 		{
 			$("#lista_Lugares").append("<br><br>");
 			nrLugaresFila=8;
 		}
 			  $("#lista_Lugares").append("<button id=bSlot"+i+" class='btn btn-success bSlot' style=width:100px>Slot "+i+ "</button>");
 		if(i%4==0 && i%8!=0)//Para formar corredor
 		{
 			$("#lista_Lugares").append("<button style=width:100px;visibility:hidden></button>");
 		}
 		nrLugaresFila--;
 	}
  $("#lista_Lugares").append("<br><br><label style='border-style:solid'>Porta</label><br><br>");

    $("#lista_Lugares").append('<br><h3>Detalhes da reserva:</h3>');
    $("#lista_Lugares").append('<label for="begin">Hora de início</label>');
    $("#lista_Lugares").append('<input id="begin" maxlength="5" type="text" placeholder="HH:MM"><br><br>');
    $("#lista_Lugares").append('<label for="end">Hora de fim</label>');
    $("#lista_Lugares").append('<input id="end" maxlength="5" type="text" placeholder="HH:MM"><br><br>');
    $("#lista_Lugares").append('<label for="data">Data da reserva</label>');
    $("#lista_Lugares").append('<input id="data" type="date"><br><br>');
    $("#lista_Lugares").append('<Button type="button" style="white-space: normal;" class="sala btn btn-success btn-lg" id="submit">'+"Confirmar reserva"+'</Button>');

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
