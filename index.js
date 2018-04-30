$("document").ready(function(e)
{
	// É mostrada a página de login
	$(".container").load("html/conta/login.html");

	// Ao clicar no botão 'home'
	$(".glyphicon-home").click(function(e)
	{
		// Volta para a página de login
		$(".container").load("html/conta/login.html");
	});
});