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

  $("#lista_Lugares").empty();
  $("#lista_Lugares").append("<h3>Lista de lugares - "+selected+"</h3>");


  findSala(selected);//encontra a sala selacionada
  getAllReservasAluno();//encontra todas as reservas na naquela determinda sala
  LoadMesas();//Display das mesas
  $("#submit").click(function(e){

    var quantidade_lugares = salaSelected["nr_slots"];
    dataP = $("#data").val();//Set da data do professor para a reserva

    //Verifica as opções que foram selacionadas
    for(var i = 0;i <= quantidade_lugares; i++){

      var selected_option = $('#'+i).is(":checked");
      if(selected_option){//Se a opção foi selacionda verfica se existe conflito
        //Para todas as reservas da determnda sala,verifica se existe conflito nas horas das reservas
        var tamanho = reservas_sala_aluno.length;

        for (var j = 0; j < tamanho; j++){
          console.log(j+""+i);
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
      console.log(nr_slots_apagar[i]);
      removeReserva(nr_slots_apagar[i]);//Caso exista conflito remove a reserva do aluno
      setNotificaAluno();
    }

    addReservaProf(selected,$("#data").val(),$("#begin").val(),$("#end").val(),slotProf);
    load("html/util/comfirma_reserva.html");
  });
});


//Função responsavel do display
function LoadMesas(){
   var size = salaSelected["nr_slots"];
   $("#lista_Lugares").empty();
   for(var i = 0;i <= size; i++){

     $("#lista_Lugares").append("<div class='checkbox'>"+"<label> <input type='checkbox' id ='"+i+"'>"+
     "Lugar   " +i+"</label>"+"</div>");

   }

    $("#lista_Lugares").append('<br><h3>Detalhes da reserva:</h3>');
    $("#lista_Lugares").append('<label for="begin">Hora de início</label>');
    $("#lista_Lugares").append('<input id="begin" maxlength="5" type="text" placeholder="HH:MM"><br><br>'); 
    $("#lista_Lugares").append('<label for="end">Hora de fim</label>');   
    $("#lista_Lugares").append('<input id="end" maxlength="5" type="text" placeholder="HH:MM"><br><br>');
    $("#lista_Lugares").append('<label for="data">Data da reserva</label>');       
    $("#lista_Lugares").append('<input id="data" type="date"><br><br>');
    $("#lista_Lugares").append('<Button type="button" class="sala btn btn-success btn-lg" id="submit">'+"Confirmar reserva"+'</Button>');

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
