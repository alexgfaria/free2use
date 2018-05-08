function go(page)
{
	$("#content").load("html/tecnico/"+page+".html");
}

$("document").ready(function(e)
{
	// Fechar sala de estudo
	$("#fechar").click(function(e)
	{
		go("fechar");
	});

	// Abrir sala de estudo
	$("#abrir").click(function(e)
	{
		go("abrir");
	});

	// Adicionar sala de estudo
	$("#adicionar").click(function(e)
	{
		go("adicionar");
	});

	// Remover sala de estudo
	$("#remover").click(function(e)
	{
		go("remover");
	});

});