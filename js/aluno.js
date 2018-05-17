$(document).ready(function(e)
{
	$("#bReservar").off("click").click(function() {
	
		load("html/aluno/tipoReserva.html");
	
	});

	$("#bMinhasReservas").off("click").click(function() {
	
		load("html/aluno/minhasReservas.html");
	
	});
});
