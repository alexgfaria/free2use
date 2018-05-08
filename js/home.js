function goToLogin()
{
	// O botão do 'logout' é escondido
	hide($("#logout"));

	// É mostrada a página de login
	$("#content").load("html/login.html");
}

function goToHome(home)
{
	// O botão do 'logout' torna-se visível
	show($("#logout"));

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
	// Ação do botão 'entrar'
	$("#entrar").click(function(e)
	{
		goToLogin();
		$("#entrar").hide();
	});
  $('.carousel').carousel(3000);
  jumpToContent();
});