$("document").ready(function(e)
{
	// O botão do 'logout' é escondido
	//$("#logout").hide();

	// É mostrada a página de login
	$(".container").load("html/conta/login.html");

	// Ao clicar no botão 'home'
	$(".glyphicon-home").click(function(e)
	{
		// Volta para a página de login
		$(".container").load("html/conta/login.html");
	});
});