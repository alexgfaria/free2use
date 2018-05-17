var valor;

$(document).ready(function(){
	$("#bTipoReserva").off("click").click(function(){

	valor=$("input[name='tipoReserva']:checked").val();
	if(valor!=null)
	{
		load("html/aluno/reservar.html");
	}
	else
	{
		alert("Selecione uma das opções");
	}
	});
});
