$("document").ready(function(e)
{
  // É executado quando é clicado na opção "Agendar dúvidas"
  $("#duvida").click(function(e){
    LoadMenu("html/util/reserva.html");
  });
  // É executado quando é clicado na opção "Aula"
  $("#aula").click(function(e){
    LoadMenu("html/util/aula.html");
  });
  $("#visualizar").click(function(e){
    LoadMenu("html/util/visualizarReserva.html");
  });
});
