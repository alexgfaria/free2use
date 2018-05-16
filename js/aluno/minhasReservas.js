var idCol=0;
//var i=0;
$(document).ready(function(){

	for(var i=0; i < arrayReservasInd.length; i++) 
	{
		if(arrayReservasInd[i]!=null && arrayReservasInd[i].nrAluno === nrAlunoLogin)
		{
			$("#reservasIndividuais").append("<div id=rowInd"+i+" class='row' style='margin-bottom:20px'></div>");

			preencheReservas(arrayReservasInd,i,'Ind');
			
			if(!getDataAtual(arrayReservasInd[i].date,arrayReservasInd[i].hFim))
			{
				$("#rowInd"+i).append("<div id=col"+idCol+" class='col-sm-2'></div>");
				$("#col"+idCol).append("<button id=bCancelarInd"+i+" class='btn btn-danger cancelarInd'>Cancelar</button>");
				idCol++;
			}
			else 
			{
				$("#rowInd"+i).append("<div id=col"+idCol+" class='col-sm-2'></div>");
				$("#col"+idCol).append("<button id=bAddCommentInd"+i+" class='btn btn-primary addCommentInd'>Comentar</button>");
				idCol++;

				$("#rowInd"+i).append("<div id=col"+idCol+" class='col-sm-1'></div>");
				$("#col"+idCol).append("<button id=bSeeCommentInd"+i+" class='btn btn-primary seeCommentInd'>Ver comentários</button>");
				idCol++;
			}
		}
	}
	
	for(var j=0; j<arrayReservasGrupo.length; j++)
	{
		if(arrayReservasGrupo[j]!=null && verificaNrLogin(j))
		{
			$("#reservasGrupo").append("<div id=rowGrupo"+j+" class='row' style='margin-bottom:20px'></div>");

			preencheReservas(arrayReservasGrupo,j,'Grupo');

			if(!getDataAtual(arrayReservasGrupo[j].date,arrayReservasGrupo[j].hFim))
			{
				$("#rowGrupo"+j).append("<div id=col"+idCol+" class='col-sm-2'></div>");
				$("#col"+idCol).append("<button id=bCancelarGrupo"+j+" class='btn btn-danger cancelarGrupo'>Cancelar</button>");
				idCol++;

				if(arrayReservasGrupo[j].confirmada.indexOf(nrAlunoLogin)<0)
				{
					$("#rowGrupo"+j).append("<div id=col"+idCol+" class='col-sm-1'></div>");
					$("#col"+idCol).append("<button id=confirmar"+j+" class='btn btn-success sucesso'>Confirmar</button>");
					idCol++;
				}
			}
			else 
			{
				$("#rowGrupo"+j).append("<div id=col"+idCol+" class='col-sm-2'></div>");
				$("#col"+idCol).append("<button id=bAddCommentGrupo"+j+" class='btn btn-primary addCommentGrupo'>Comentar</button>");
				idCol++;

				$("#rowGrupo"+j).append("<div id=col"+idCol+" class='col-sm-1'></div>");
				$("#col"+idCol).append("<button id=bSeeCommentGrupo"+j+" class='btn btn-primary seeCommentGrupo'>Ver comentários</button>");
				idCol++;
			}
			
		}
	}
	
	$("#reservasGrupo").append("<button id=bVoltarMenuAluno class='btn btn-primary'>Voltar</button>");

	function preencheReservas(array,indice,tipo)
	{
			$("#row"+tipo+indice).append("<div id=col"+idCol+" class='col-sm-2'></div>");
			$("#col"+idCol).append("<label id=date"+indice+">"+"Data da reserva: "+array[indice].date+"</label>");
			idCol++;
			//alert("#row"+tipo+indice);
			$("#row"+tipo+indice).append("<div id=col"+idCol+" class='col-sm-2'></div>");
			$("#col"+idCol).append("<label id=horaI"+indice+">"+"Hora de início: "+array[indice].hInicio+"</label>");
			idCol++;
	
			$("#row"+tipo+indice).append("<div id=col"+idCol+" class='col-sm-2'></div>");
			$("#col"+idCol).append("<label id=horaF"+indice+">"+"Hora de fim: "+array[indice].hFim+"</label>");
			idCol++;

			$("#row"+tipo+indice).append("<div id=col"+idCol+" class='col-sm-2'></div>");
			$("#col"+idCol).append("<label id=sala"+indice+">"+array[indice].sala+"</label>");
			idCol++;

			$("#row"+tipo+indice).append("<div id=col"+idCol+" class='col-sm-1'></div>");
			$("#col"+idCol).append("<label id=slot"+indice+">Slot "+array[indice].slot+"</label>");
			idCol++;
	}

	function verificaNrLogin(reservaId)
	{
		var nrAluno=arrayReservasGrupo[reservaId].alunos.split(",");
		
		for(var i=0;i<nrAluno.length;i++)
		{
			if(nrAluno[i] === nrAlunoLogin && arrayReservasGrupo[reservaId].cancelada.indexOf(nrAlunoLogin)<0)
			{
				return true;
			}
		}
			return false;
	}

	function getDataAtual(dataReserva,timeFinalReserva)
	{
		var today=new Date();
		var dd=today.getDate();
		var mm=today.getMonth()+1;
		var yyyy=today.getFullYear();

		if(dd<10)
		{
			dd="0"+dd;
		}
		if(mm<10)
		{
			mm="0"+mm;
		}
		var data=yyyy+"/"+mm+"/"+dd;
		if(dataReserva<data)
		{
			//alert("dataMenor");
			return true;
		}
		else if(dataReserva === data)
		{
			var time=getTimeAtual(timeFinalReserva);
			if(timeFinalReserva<=time)
			{
				//alert("data igual e time menor ou igual");
				return true;
			}
			else
			{
				//alert("data igual e time maior");
				return false;
			}
		}
		else if(dataReserva>data)
		{
			//alert("dataMaior");
			return false;
		}
		
	}

	function getTimeAtual(timeFimReserva)
	{
		var today=new Date();
		var hh=today.getHours();
		var mm=today.getMinutes();
		
		if(hh<10)
		{
			hh="0"+hh;
		}
		if(mm<10)
		{
			mm="0"+mm;
		}
		var time=hh+":"+mm;
		return time;
		//alert(time);
	}


	$("#bVoltarMenuAluno").click(function(){
		load("html/aluno.html");
	});

	$(".cancelarInd").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(12,(buttonName.length));
		$("#rowInd"+buttonName).hide();
		delete arrayReservasInd[parseInt(buttonName)];
	});

	$(".cancelarGrupo").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(14,(buttonName.length));
		$("#rowGrupo"+buttonName).hide();
		arrayReservasGrupo[buttonName].cancelada+=nrAlunoLogin+",";
	});

	$(".sucesso").click(function(){
		var buttonName=$(this).attr('id');
		$("#"+buttonName).hide();
		buttonName=buttonName.substring(9,(buttonName.length));
		arrayReservasGrupo[buttonName].confirmada+=nrAlunoLogin+",";
	});
	$(".seeCommentGrupo").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(16,(buttonName.length));
		alert(arrayReservasGrupo[buttonName].comments);
	});
	$(".seeCommentInd").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(14,(buttonName.length));
		alert(arrayReservasInd[buttonName].comments);
	});
	$(".addCommentInd").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(14,(buttonName.length));
		var comment = prompt("Escreva o seu comentário","");
		if (comment != null && comment != "") 
		{
        		arrayReservasInd[buttonName].comments+="\n"+nrAlunoLogin+":"+comment;
		} 
	});
	$(".addCommentGrupo").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(16,(buttonName.length));
		var comment = prompt("Escreva o seu comentário","");
		if (comment != null && comment != "") 
		{
        		arrayReservasGrupo[buttonName].comments+="\n"+nrAlunoLogin+":"+comment;
		}
			
	});
});

