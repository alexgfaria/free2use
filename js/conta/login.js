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
			$(".container").load("html/menu_principal/aluno.html");
		}
		else if(user == "prof" && pass == "prof")
		{
			$(".container").load("html/menu_principal/prof.html");
		}
		else if(user == "tecnico" && pass == "tecnico")
		{
			$(".container").load("html/menu_principal/tecnico.html");
		}
		else
		{
			alert("Credenciais erradas. Tente novamente.");
		}
	});

	// Ação do botão 'Criar conta'
	$("#criar").click(function(e)
	{
		// Vai para a respetiva página		
		$(".container").load("html/conta/criar.html");
	});

	// Ação do botão 'Esqueceu-se da palavra-passe?'
	$("#esquecer").click(function(e)
	{
		// Vai para a respetiva página
		$(".container").load("html/conta/esquecer.html");
	});
});