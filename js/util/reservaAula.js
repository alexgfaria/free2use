var salaSelected;//Sala que foi selacionada
var reservas_sala_aluno = [];
var nr_slots_index =[];
$("document").ready(function(e)
{
  findSala(selected);
  getAllMesasOcupadasAluno();
  for (var i = 0; i < reservas_sala_aluno.length; i++) {
    if(existeReservaMesaAula(dataP,i)){
      removeReserva(nr_slots_index[i]);
    }
  }

});
