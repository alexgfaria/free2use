$("document").ready(function(e)
{
	// ...
	// add listeners
	// ...

	alertCancelation();

});

function randomBool()
{ return Math.random() >= 0.5; }

function alertCancelation()
{
	var isReservaCancelada = randomBool();
	if(isReservaCancelada)
	{
		var tecnicoCancelou = randomBool();
		var message_delay = (parseInt(Math.random() * 8) + 2)*1000;
		setTimeout(function(e)
		{
			if(tecnicoCancelou)
			{
				alert("Uma ou mais das suas reservas foram canceladas devido a sala(s) de estudo(s) fechada(s)/removida(s).");
			}
			else
			{
				alert("Uma ou mais das suas reservas foram canceladas devido a uma reserva sobreposta por um docente.");
			} 
		},message_delay);	
	}
}