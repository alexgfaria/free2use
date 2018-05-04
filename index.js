function goToLogin()
{
	// O botão do 'logout' é escondido
	$("#logout").hide();

	// O botão do 'home' é escondido
	$("#home").hide();

	// É mostrada a página de login
	$(".container").load("html/conta/login.html");
}

function goToHome(home)
{
	// Vai de volta para a página principal
	$(".container").load("html/menu_principal/"+home+".html");
}

$("document").ready(function(e)
{
	goToLogin();

	// Ação do botão 'logout'
	$("#logout").click(function(e)
	{
		goToLogin();
	});

});