const ENTER_KEY = 13;

// Carrega o conteúdo da página respetiva para o container
function loadMenuPrincipal(tipo)
{
	// Desativa o evento para o pressionar do ENTER
	$("body").unbind("keydown");

	// Vai para a respetiva página principal
	goToHome(tipo);

	// Ação do botão 'home'
	// (volta para a respetiva página principal)
	$("#home").click(function(e)
	{
		goToHome(tipo);			
	});
}

function checkLoginCreds()
{
	// São buscadas as credenciais inseridas nos campos
	var user = $("#user").val();
	var pass = $("#pass").val();

	var success = false;

	credenciais.forEach(c,function(e)
	{
		if(c["user"] == user && c["pass"] == pass)
		{
			loadMenuPrincipal(c["tipo"]);
			success = true; 
		}
	});

	if(!success)
	{
		alert("Credenciais erradas. Tente novamente.");
	}
}

$("document").ready(function(e)
{
	$("body").on("keydown",function(e) 
	{
    if(e.which == ENTER_KEY)
    {
    	checkLoginCreds();
    } 
  });

	// Ação do botão 'iniciar sessão'
	$("#iniciar").click(function(e)
	{
		checkLoginCreds();
	});
});