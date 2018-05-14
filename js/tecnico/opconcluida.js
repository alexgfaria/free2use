

$("document").ready(function(e)
{

	$("#abrir").click(function(e)
	{
		var room = document.getElementById("selectabrir").value;
		var i=0;
		$(document).ready(function(){
			salas.forEach(function(s)
			{
				if(s["nome"]==room){
					salas.splice(i,1);
				}
				i++;
			});
		})
		load("html/tecnico/"+"opconcluida"+".html");
	});

	$("#adicionar").click(function(e)
	{
		var nome= document.getElementById('nome').value;
		var andar = document.getElementById('andar').value;
		var nr_slots = document.getElementById('lugares').value;
		
		salas.push({
             "nome": nome,
			 "andar": andar,
			 "nr_slots":nr_slots,
			 "fechada": false
            });

		load("html/tecnico/"+"opconcluida"+".html");
	});
	
	$("#fechar").click(function(e)
	{
		var room = document.getElementById("selectfechar").value;
		var i=0;
		$(document).ready(function(){
			salas.forEach(function(s)
			{
				if(s["nome"]==room){
					salas.splice(i,1);
				}
				i++;
			});
		})

		load("html/tecnico/"+"opconcluida"+".html");
	});

	$("#alterar").click(function(e)
	{
		var room = document.getElementById("selectalterar").value;
		alert(document.getElementById("capacidade").value);
		$(document).ready(function(){
			salas.forEach(function(s)
			{
				if(s["nome"]==room){
					alert(s["nome"]+" - "+s["nr_slots"]);
					s["nr_slots"]=document.getElementById("capacidade").value;
					alert(s["nome"]+" - "+s["nr_slots"]);
				}
			});
		})

		load("html/tecnico/"+"opconcluida"+".html");
	});

	$("#remover").click(function(e)
	{
		var room = document.getElementById("selectremover").value;
		var i=0;
		$(document).ready(function(){
			salas.forEach(function(s)
			{
				if(s["nome"]==room){
					salas.splice(i,1);
				}
				i++;
			});
		})

		load("html/tecnico/"+"opconcluida"+".html");
	});


});


$("document").ready(function(e)
{
	$("#hometec").click(function(e)
	{

		load("html/"+"tecnico"+".html");
	});

});


