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
