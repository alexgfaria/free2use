function goToLogin()
{
	// O botão do 'logout' é escondido
	hide($("#logout"));

	// O botão do 'home' é escondido
	hide($("#home"));

	// É mostrada a página de login
	$(".container").load("html/conta/login.html");
}

function goToHome(home)
{
	// O botão do 'logout' é escondido
	hide($("#logout"));

	// O botão do 'home' é escondido
	hide($("#home"));

	// Vai de volta para a página principal
	$(".container").load("html/menu_principal/"+home+".html");
}

function hide(e)
{
	if(!e.hasClass("hidden")) e.addClass("hidden");
}

function show(e)
{
	if(e.hasClass("hidden")) e.removeClass("hidden");
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