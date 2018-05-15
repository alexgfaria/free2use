// Carrega o conteúdo da página respetiva para o container
function loadMenuPrincipal(tipo)
{
	// Desativa o evento para o pressionar do ENTER
	$("body").unbind("keydown");

	// Vai para a respetiva página principal
	goToHome(tipo);

	// Ação do botão 'home'
	// (volta para a respetiva página principal)
	$(".home").off("click").click(function(e)
	{
		goToHome(tipo);			
	});
}

function checkLoginCreds()
{
	// São buscadas as credenciais inseridas nos campos
	var user = $("#user").val();
	var pass = $("#pass").val();

	var success = false;

	credenciais.forEach(function(c)
	{
		if(c["user"] == user && c["pass"] == pass)
		{
			success = true; 
			loadMenuPrincipal(c["tipo"]);
			setTimeout(function()
			{
				alertCancelations(c["tipo"]);
			},1000);
		}
	});

	if(!success)
	{
		alert("Credenciais erradas. Tente novamente.");
	}
}

function alertCancelations(tipo)
{
	if(tipo != "tecnico")
	{
		switch(alertas[tipo])
		{
			case PROF:
				alert("Uma ou mais reservas foram canceladas devido a uma reserva sobreposta por um docente.");
				alertas[tipo] = NONE;
				break;
			case TECNICO:
				alert("Uma ou mais reservas foram canceladas devido à indisponibilidade de uma sala.");
				alertas[tipo] = NONE;
				break;
			case NONE:
			default:
				break;
		}
	}
}

$("document").ready(function(e)
{
	$("body").on("keydown",function(e) 
	{
    if(e.which == 13)
    {
    	checkLoginCreds();
    } 
  });

	// Ação do botão 'iniciar sessão'
	$("#iniciar").off("click").click(function(e)
	{
		checkLoginCreds();
	});
});