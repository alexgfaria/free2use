// Carrega o conteúdo da página respetiva para o container
function loadMenuPrincipal(tipo)
{
	// Ação do botão 'home'
	// (volta para a respetiva página principal)
	$(".glyphicon-home").click(function(e)
	{
		goToHome(tipo);			
	});

	$(".container").load("html/menu_principal/"+tipo+".html");

	// O botão 'logout' torna-se visível
	$("#logout").show();

	// O botão 'home' torna-se visível
	$("#home").show();
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
});