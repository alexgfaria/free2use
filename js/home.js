function goToLogin()
{
	// O botão do 'logout' é escondido
	hide($("#logout"));

	// É mostrada a página de login
	load("html/login.html");

	jumpToContent();
}

function goToHome(home)
{
	// O botão do 'logout' torna-se visível
	show($("#logout"));

	// Vai de volta para a página principal
	load("html/"+home+".html");

	hide($("#goback"));
}

$("document").ready(function(e)
{
	// Ação do botão 'entrar'
	$("#entrar").click(function(e)
	{
		goToLogin();
		$("#entrar").hide();
	});
});