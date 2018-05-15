var salaSelected;//Sala que foi selacionada
var reservas_sala_aluno = [];
var nr_slots_index =[];
var nr_slots_apagar = [];
var profSlot = [];
$("document").ready(function(e)
{
  findSala(selected);
  getAllReservasAluno();
  for (var i = 0; i < reservas_sala_aluno.length; i++) {
    if(existeReservaMesaAula(dataP,i)){
      if(!nr_slots_apagar.includes(nr_slots_index[i])){
        nr_slots_apagar.push(nr_slots_index[i]);
      }
    }
  }
  for (var i = 0; i < nr_slots_apagar.length; i++) {
    removeReserva(nr_slots_apagar[i]);//Caso exista conflito remove a reserva do aluno
    setNotificaAluno();
  }
  for (var i = 0; i < salaSelected["nr_slots"]; i++) {
    profSlot.push(i);
  }
  addReservaProf(salaSelected["nome"],dataP,beginP,endP,profSlot);
});
