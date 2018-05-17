var i=0;
var indiceReserva=0;
var nrElementosGrupo=0;
function preencheSelectList(id,nrVezes,data)
{
	var i=0;
	while(i<=nrVezes)
	{
		if(data)
		{
		if(i<10 && i>0)
		{
			var nr="0".concat(i);
			$(id).append($('<option>', {value:nr, text:nr}));
			
		}
		}
		else if(i<10)
		{
			var nr="0".concat(i);
			$(id).append($('<option>', {value:nr, text:nr}));
			
		}
		if(i>=10)
		{
			$(id).append($('<option>', {value:i, text:i}));
		}
		i++;
	}
}

function guardarReservasInd(array)
{
	salaEstudo=$("#selectBoxSala option:selected").text();

	data=$("#selectBoxAno option:selected").text()+"-"+$("#selectBoxMes option:selected").text()+
	"-"+$("#selectBoxDia option:selected").text();

	horaInicio=$("#selectBoxHoraInicio option:selected").text()+":"+$("#selectBoxMinutosInicio option:selected").text();
			
	horaFim=$("#selectBoxHoraFim option:selected").text()+":"+$("#selectBoxMinutosFim option:selected").text();
			
	array["aluno"].push({'sala':salaEstudo,'data':data,'begin':horaInicio,'end':horaFim,'slot':[],'comments':"",'alunos':[nrAlunoLogin],'confirmacoes':[],'tipo':"ind"});
	indiceReserva=array.aluno.length-1;
}

function guardarReservasGrupo(array)
{
	salaEstudo=$("#selectBoxSala option:selected").text();

	data=$("#selectBoxAno option:selected").text()+"-"+$("#selectBoxMes option:selected").text()+
	"-"+$("#selectBoxDia option:selected").text();

	horaInicio=$("#selectBoxHoraInicio option:selected").text()+":"+$("#selectBoxMinutosInicio option:selected").text();
			
	horaFim=$("#selectBoxHoraFim option:selected").text()+":"+$("#selectBoxMinutosFim option:selected").text();
	
	var nrAlunos=0;
	var alunoNr=nrAlunoLogin+",";
	
	while(nrAlunos<i)
	{
		alunoNr+=$("#alunoNr"+nrAlunos).val();
		if(i-nrAlunos>1)
		{
			alunoNr+=",";
		}
		nrAlunos++;
	}
	array["aluno"].push({'sala':salaEstudo,'data':data,'begin':horaInicio,'end':horaFim,'slot':[],'comments':"",'alunos':alunoNr.split(","),'confirmacoes':[],'tipo':"grupo"});	
	indiceReserva=array.aluno.length-1;
}

$(document).ready(function(){

	salas.forEach(function(s,index)
	{
		console.log(s);
		if(!s.fechada)
		{
			$("#selectBoxSala").append("<option value="+index+">"+s.nome+"</option>");
		}								
	});
						

	if(valor==="rIndividual")
	{
		$("#title").text("Reserva individual");
	}
	else if(valor==="rGrupo")
	{
		$("#divNrAlunos").removeClass("hidden");
		$("#title").text("Reserva de grupo");
	}

	$("#bConfReserva").off("click").click(function(){
	
		if(valor==="rIndividual")
	    	{
			guardarReservasInd(reservas);
			if($("#selectBoxSala option:selected").text()==="Sala 1")
			{
				load("html/aluno/slotSalaEstudo1.html");
			}
			else
			{
				alert("Sala indisponível");
			}
		}
		else if(valor==="rGrupo")
		{
			guardarReservasGrupo(reservas);	
			if($("#selectBoxSala option:selected").text()==="Sala 1")
			{
				load("html/aluno/slotSalaEstudo1.html");
			}
			else
			{
				alert("Sala indisponível");
			}
		}
	});

	$("#bAddAluno").off("click").click(function(){
		
		$("#divNrAlunos").append("<br><input id=alunoNr"+i+" type='text'><br><br>");
		nrElementosGrupo++;
		i++;
	});
});

