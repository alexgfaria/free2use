$("document").ready(function(e)
{
	// Fechar sala de estudo
	$("#fechar").click(function(e)
	{
		load("html/tecnico/"+"fechar"+".html");
	});

	// Abrir sala de estudo
	$("#abrir").click(function(e)
	{
		load("html/tecnico/"+"abrir"+".html");
	});

	// Adicionar sala de estudo
	$("#adicionar").click(function(e)
	{
		load("html/tecnico/"+"adicionar"+".html");
	});

	// Remover sala de estudo
	$("#remover").click(function(e)
	{
		load("html/tecnico/"+"remover"+".html");
	});

});