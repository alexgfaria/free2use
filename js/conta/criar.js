$("document").ready(function(e)
{
	// Quando é clicado no botão 'Confirmar'
	$("#confirmar").click(function(e)
	{
		// O utilizador é notificado
		alert("A sua conta foi criada com sucesso.");

		// Volta para a página de login
		$(".container").load("html/conta/login.html");
	});
});