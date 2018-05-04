// Carrega o conteúdo da página respetiva para o container
function loadMenuPrincipal(tipo)
{
	$(".container").load("html/menu_principal/"+tipo+".html");
	$("#logout").show();
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