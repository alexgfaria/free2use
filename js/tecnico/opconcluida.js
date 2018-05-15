

$("document").ready(function(e)
{

	$("#abrir").off("click").click(function(e)
	{
		var room = document.getElementById("selectabrir").value;
		var i=0;
			salas.forEach(function(s)
			{
				if(s["nome"]==room&&s["fechada"]){
					s["fechada"]=false;
				}
				i++;
			});
		load("html/tecnico/"+"opconcluida"+".html");
	});

	$("#adicionar").off("click").click(function(e)
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
	
	$("#fechar").off("click").click(function(e)
	{
		var room = document.getElementById("selectfechar").value;
		var i=0;
			salas.forEach(function(s)
			{
				if(s["nome"]==room&&!s["fechada"]){
					s["fechada"]=true;
					removetodasreservas(room);
				}
				i++;
			});
		//alert(numeroreservas(room));
		load("html/tecnico/"+"opconcluida"+".html");
	});

	$("#alterar").off("click").click(function(e)
	{
		var room = document.getElementById("selectalterar").value;
		var nslots = document.getElementById("capacidade").value;

		removereservas(room, nslots);

		load("html/tecnico/"+"opconcluida"+".html");
	});

	$("#remover").off("click").click(function(e)
	{
		var room = document.getElementById("selectremover").value;
		var i=0;
			salas.forEach(function(s)
			{
				if(s["nome"]==room){
					salas.splice(i,1);
					i--;
					removetodasreservas(room);
				}
				i++;
			});
	
		load("html/tecnico/"+"opconcluida"+".html");
	});


});


$("document").ready(function(e)
{
	$("#hometec").off("click").click(function(e)
	{

		load("html/"+"tecnico"+".html");
	});

});


function removetodasreservas(room){
	
	var i=0;
	var tamanhoaluno=reservas["aluno"].length;
	for (i = 0; i < tamanhoaluno; i++) {
		//alert(reservas["aluno"][i]["sala"]+" - "+reservas["aluno"][i]["data"]);
    	if(reservas["aluno"][i]["sala"]==room){
 					//alert(reservas["aluno"][i]["sala"]+" - "+reservas["aluno"][i]["data"]+" - eliminar");   		
					reservas["aluno"].splice(i,1);
					i--;
					tamanhoaluno--;				
					alertas["aluno"]=TECNICO;				
		}
	}

	var tamanhoprof=reservas["prof"].length;
	for (i = 0; i < tamanhoprof; i++) {
		//alert(reservas["prof"][i]["sala"]+" - "+reservas["prof"][i]["data"]);
    	if(reservas["prof"][i]["sala"]==room){
 					//alert(reservas["prof"][i]["sala"]+" - "+reservas["prof"][i]["data"]+" - eliminar");   		
					reservas["prof"].splice(i,1);
					i--;
					tamanhoprof--;			
					alertas["prof"]=TECNICO;				
		}
	}
}


function removereservas(room, slots){
	
	var i=0;
	var j=0;
	var tamanhoslots=0;
	var tamanhoaluno=reservas["aluno"].length;
	var tamanhoprof=reservas["prof"].length;


	for (i = 0; i < tamanhoaluno; i++) {
    	if(reservas["aluno"][i]["sala"]==room){
			tamanhoslots=reservas["aluno"][i]["slot"].length;
			for (j = 0; j < tamanhoslots; j++) {
    			if(reservas["aluno"][i]["slot"][j]>=slots){
					reservas["aluno"][i]["slot"].splice(j,1);
					j--;
					tamanhoslots--;				
					alertas["aluno"]=TECNICO;
				}
			}
			if(tamanhoslots==0){
					reservas["aluno"].splice(i,1);
					i--;
					tamanhoaluno--;			
					alertas["aluno"]=TECNICO;		
			}
		}
	}

	for (i = 0; i < tamanhoprof; i++) {
    	if(reservas["prof"][i]["sala"]==room){
			tamanhoslots=reservas["prof"][i]["slot"].length;
			for (j = 0; j < tamanhoslots; j++) {
    			if(reservas["prof"][i]["slot"][j]>=slots){
					reservas["prof"][i]["slot"].splice(j,1);
					j--;
					tamanhoslots--;				
					alertas["prof"]=TECNICO;
				}
			}
			if(tamanhoslots==0){
					reservas["prof"].splice(i,1);
					i--;
					tamanhoprof--;			
					alertas["prof"]=TECNICO;		
			}
		}
	}
}





	