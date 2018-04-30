$("document").ready(function(e)
{
	// Quando é submetido o email para a recuperação da palavra-passe
	$("#submit-email").click(function(e)
	{
		// O utilizador é notificado
		alert("Foi enviado um email com as instruções para repor a sua palavra-passe.");

		// Volta para a página de login
		$(".container").load("html/conta/login.html");
	});
});