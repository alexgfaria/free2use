$("document").ready(function(e)
{
	$("#iniciar").click(function(e)
	{
		var user = $("#user").val();
		var pass = $("#pass").val();

		if(user == "aluno" == pass)
		{
			$(".container").load("html/menu_principal/aluno.html");
		}
		else if(user == "prof" == pass)
		{
			$(".container").load("html/menu_principal/prof.html");
		}
		else if(user == "tecnico" == pass)
		{
			$(".container").load("html/menu_principal/tecnico.html");
		}
		else
		{
			alert("Credenciais erradas. Tente novamente.");
		}
	});
	$("#criar").click(function(e)
	{
		$(".container").load("html/conta/criar.html");
	});
	$("#esquecer").click(function(e)
	{
		$(".container").load("html/conta/esquecer.html");
	});
});