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

	data=$("#selectBoxAno option:selected").text()+"/"+$("#selectBoxMes option:selected").text()+
	"/"+$("#selectBoxDia option:selected").text();

	horaInicio=$("#selectBoxHoraInicio option:selected").text()+":"+$("#selectBoxMinutosInicio option:selected").text();
			
	horaFim=$("#selectBoxHoraFim option:selected").text()+":"+$("#selectBoxMinutosFim option:selected").text();
			
	array.push({ nrAluno: nrAlunoLogin,sala: salaEstudo, date: data, hInicio: horaInicio,hFim: horaFim,comments:"",slot:""});
	indiceReserva=array.length-1;
}

function guardarReservasGrupo(array)
{
	salaEstudo=$("#selectBoxSala option:selected").text();

	data=$("#selectBoxAno option:selected").text()+"/"+$("#selectBoxMes option:selected").text()+
	"/"+$("#selectBoxDia option:selected").text();

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
	//alert(alunoNr);
			
	array.push({ alunos: alunoNr, sala: salaEstudo, date: data, hInicio: horaInicio,hFim: horaFim,confirmada:"",cancelada:"",comments:"",slot:""});
	indiceReserva=array.length-1;
	//alert(array[0].alunos);
}

$(document).ready(function(){

	if(valor==="rIndividual")
	{
		$("#title").text("Reserva individual");
	}
	else if(valor==="rGrupo")
	{
		$("#divNrAlunos").removeClass("hidden");
		$("#title").text("Reserva de grupo");
	}

	$("#bConfReserva").click(function(){
	
		if(valor==="rIndividual")
	    	{
			guardarReservasInd(arrayReservasInd);

			//load("html/aluno.html");
			//alert($("#selectBoxSala option:selected").text());
			if($("#selectBoxSala option:selected").text()==="Sala de estudo do piso 1")
			{
				load("html/aluno/slotSalaEstudo1.html");
			}
		}
		else if(valor==="rGrupo")
		{
			guardarReservasGrupo(arrayReservasGrupo);
			//load("html/aluno.html");	
			if($("#selectBoxSala option:selected").text()==="Sala de estudo do piso 1")
			{
				load("html/aluno/slotSalaEstudo1.html");
			}
		}
	});

	$("#bAddAluno").click(function(){
		
		$("#divNrAlunos").append("<input id=alunoNr"+i+" type='text'><br>");
		nrElementosGrupo++;
		//alert("alunoNr"+i);
		i++;
	});
});

