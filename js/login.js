// Carrega o conteúdo da página respetiva para o container
function loadMenuPrincipal(tipo)
{
	// Vai para a respetiva página principal
	goToHome(tipo);

	// Ação do botão 'home'
	// (volta para a respetiva página principal)
	$(".glyphicon-home").click(function(e)
	{
		goToHome(tipo);			
	});
}

$("document").ready(function(e)
{
	// Ação do botão 'iniciar sessão'
	$("#iniciar").click(function(e)
	{
		// São buscadas as credenciais inseridas nos campos
		var user = $("#user").val();
		var pass = $("#pass").val();

		if(user == "aluno" && pass == "aluno")
		{
			loadMenuPrincipal("aluno");
		}
		else if(user == "prof" && pass == "prof")
		{
			loadMenuPrincipal("prof");
		}
		else if(user == "tecnico" && pass == "tecnico")
		{
			loadMenuPrincipal("tecnico");		
		}
		else
		{
			alert("Credenciais erradas. Tente novamente.");
		}
	});
	jumpToContent();
});