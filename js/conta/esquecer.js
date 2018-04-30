$("document").ready(function(e)
{
	$("#submit-email").click(function(e)
	{
		alert("Foi enviado um email com as instruções para repor a sua palavra-passe.");
		$(".container").load("index.html");
	});
});