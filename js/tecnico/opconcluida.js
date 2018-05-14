

$("document").ready(function(e)
{

	$("#abrir").click(function(e)
	{
		var room = document.getElementById("selectabrir").value;
		var i=0;
		$(document).ready(function(){
			salas.forEach(function(s)
			{
				if(s["nome"]==room&&s["fechada"]){
					s["fechada"]=false;
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
				if(s["nome"]==room&&!s["fechada"]){
					s["fechada"]=true;
					removetodasreservas(room);
				}
				i++;
			});
		})

		load("html/tecnico/"+"opconcluida"+".html");
	});

	$("#alterar").click(function(e)
	{
		var room = document.getElementById("selectalterar").value;
		var nslots = document.getElementById("capacidade").value;
		var reservasremovidas= -nslots;
		//reservasremovidas = lugaresantes-lugaresdps

		$(document).ready(function(){
			salas.forEach(function(s)
			{
				if(s["nome"]==room){
					reservasremovidas=numeroreservas(room)-s["nr_slots"];
					s["nr_slots"]= nslots;
					if(reservasremovidas>0){ //quer dizer que se perderam lugares
						removereservas(room, reservasremovidas);
					}
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
					removetodasreservas(room);
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


function removetodasreservas(room){
	var i=0;
	reservas["aluno"].forEach(function(s)
			{
				if(s["sala"]==room){
					alert(s["sala"]+" - "+s["data"]);
					reservas["aluno"].splice(i,1);	
					alertas["aluno"]=TECNICO;				
				}
				i++;
			});
	i=0;
	reservas["prof"].forEach(function(s)
			{
				if(s["sala"]==room){
					alert(s["sala"]+" - "+s["data"]);
					reservas["prof"].splice(i,1);
					alertas["prof"]=TECNICO;								
				}
				i++;
			});
	i=0;
}

//n - numero de lugares a remover
function removereservas(room, n){
	var i=0;

	for (i = 0; i < reservas["aluno"].length; i++) {
    	if(reservas["aluno"][i]["sala"]==room&&n>0){
    				n--;
					reservas["aluno"].splice(i,1);					
					alertas["aluno"]=TECNICO;				
		}
		if(n==0) break;
	}

	for (i = 0; i < reservas["prof"].length; i++) {
    	if(reservas["prof"][i]["sala"]==room&&n>0){
    				n--;
					reservas["prof"].splice(i,1);					
					alertas["prof"]=TECNICO;				
		}
		if(n==0) break;
	}

}
function numeroreservas(room){
	var conta=0;
	var i=0;
	for (i = 0; i < reservas["aluno"].length; i++) {
    	if(reservas["aluno"][i]["sala"]==room&&){
			conta++;			
		}
	}

	for (i = 0; i < reservas["prof"].length; i++) {
    	if(reservas["prof"][i]["sala"]==room&&){
    		conta++;			
		}
	}
	return conta;
}

	/*reservas["aluno"].forEach(function(s)
			{
				
				i++;
			});
	i=0;
	reservas["prof"].forEach(function(s)
			{
				if(s["sala"]==room&&n>0){
					reservas["prof"].splice(i,1);										
					alertas["prof"]=TECNICO;				
				}
				i++;
			});
	i=0;
	reservas["tecnico"].forEach(function(s)
			{
				if(s["sala"]==room&&n>0){
					reservas["tecnico"].splice(i,1);										
								
				}
				i++;					
			});
	*/