function goToHome()
{
	// O botão do 'logout' é escondido
	$("#logout").hide();

	// É mostrada a página de login
	$(".container").load("html/conta/login.html");
}

$("document").ready(function(e)
{
	goToHome();

	// Ao clicar no botão 'home'
	$(".glyphicon-home").click(function(e)
	{
		goToHome();
	});
});