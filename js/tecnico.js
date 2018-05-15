$("document").ready(function(e)
{
	// Fechar sala de estudo
	$("#fechar").off("click").click(function(e)
	{
		load("html/tecnico/"+"fechar"+".html");
	});

	// Abrir sala de estudo
	$("#abrir").off("click").click(function(e)
	{
		load("html/tecnico/"+"abrir"+".html");
	});

	// Adicionar sala de estudo
	$("#adicionar").off("click").click(function(e)
	{
		load("html/tecnico/"+"adicionar"+".html");
	});

	// Remover sala de estudo
	$("#remover").off("click").click(function(e)
	{
		load("html/tecnico/"+"remover"+".html");
	});

	$("#alterar").off("click").click(function(e)
	{
		load("html/tecnico/"+"alterar"+".html");
	});

});