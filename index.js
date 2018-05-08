function goToLogin()
{
	// O botão do 'logout' é escondido
	hide($("#logout"));

	// O botão do 'home' é escondido
	hide($("#home"));

	// É mostrada a página de login
	$("#content").load("html/login.html");
}

function goToHome(home)
{
	// O botão do 'logout' torna-se visível
	show($("#logout"));

	// O botão do 'home' torna-se visível
	show($("#home"));

	// Vai de volta para a página principal
	$("#content").load("html/"+home+".html");
}

function hide(e)
{
	// O elemento é escondido
	if(!e.hasClass("hidden")) e.addClass("hidden");
}

function show(e)
{
	// O elemento torna-se visível
	if(e.hasClass("hidden")) e.removeClass("hidden");
}

$("document").ready(function(e)
{
	$("#entrar").click(function(e)
	{
		$("#content").load("html/login.html");
	});

	/*// Vai para a página de login
	goToLogin();

	// Ação do botão 'logout'
	$("#logout").click(function(e)
	{
		goToLogin();
	});*/
});