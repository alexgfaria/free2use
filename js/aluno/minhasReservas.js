var idCol=0;

$(document).ready(function(){

	var indiv = reservas["aluno"].filter(function(r) {return r.tipo==="ind"});
	for(var i=0; i < indiv.length; i++) 
	{
		if(verificaNrLogin(indiv[i].alunos))
		{
			$("#reservasIndividuais").append("<div id=rowInd"+i+" class='row' style='margin-bottom:20px'></div>");

			preencheReservas(indiv,i,'Ind');
			
			if(!getDataAtual(indiv[i].data,indiv[i].end))
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

	var grupo = reservas["aluno"].filter(function(r) { return r.tipo==="grupo" });
	for(var j=0; j<grupo.length; j++)
	{
		if(verificaNrLogin(grupo[j].alunos))
		{
			$("#reservasGrupo").append("<div id=rowGrupo"+j+" class='row' style='margin-bottom:20px'></div>");

			preencheReservas(grupo,j,'Grupo');

			if(!getDataAtual(grupo[j].data,grupo[j].end))
			{
				$("#rowGrupo"+j).append("<div id=col"+idCol+" class='col-sm-2'></div>");
				$("#col"+idCol).append("<button id=bCancelarGrupo"+j+" class='btn btn-danger cancelarGrupo'>Cancelar</button>");
				idCol++;

				if(grupo[j].confirmacoes.indexOf(nrAlunoLogin)<0)
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
			$("#col"+idCol).append("<label id=date"+indice+">"+"Data da reserva: "+array[indice].data+"</label>");
			idCol++;

			$("#row"+tipo+indice).append("<div id=col"+idCol+" class='col-sm-2'></div>");
			$("#col"+idCol).append("<label id=horaI"+indice+">"+"Hora de início: "+array[indice].begin+"</label>");
			idCol++;
	
			$("#row"+tipo+indice).append("<div id=col"+idCol+" class='col-sm-2'></div>");
			$("#col"+idCol).append("<label id=horaF"+indice+">"+"Hora de fim: "+array[indice].end+"</label>");
			idCol++;

			$("#row"+tipo+indice).append("<div id=col"+idCol+" class='col-sm-2'></div>");
			$("#col"+idCol).append("<label id=sala"+indice+">"+array[indice].sala+"</label>");
			idCol++;

			$("#row"+tipo+indice).append("<div id=col"+idCol+" class='col-sm-1'></div>");
			$("#col"+idCol).append("<label id=slot"+indice+">Slot "+array[indice].slot+"</label>");
			idCol++;
	}

	function verificaNrLogin(alunos)
	{	
		for(var i=0;i<alunos.length;i++)
		{
			if(alunos[i] == nrAlunoLogin)
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
		var data=yyyy+"-"+mm+"-"+dd;
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


	$("#bVoltarMenuAluno").off("click").click(function(){
		load("html/aluno.html");
	});

	$(".cancelarInd").off("click").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(12,(buttonName.length));
		$("#rowInd"+buttonName).hide();
		reservas["aluno"] = reservas["aluno"].filter(
			function(r) 
			{ return r != indiv[buttonName]; });
	});

	$(".cancelarGrupo").off("click").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(14,(buttonName.length));
		$("#rowGrupo"+buttonName).hide();
		reservas["aluno"][reservas["aluno"].indexOf(grupo[buttonName])].alunos=
		 reservas["aluno"][reservas["aluno"].indexOf(grupo[buttonName])].alunos.filter(
			function(nr) 
			{ return parseInt(nr) != parseInt(nrAlunoLogin);});
	});

	$(".sucesso").off("click").click(function(){
		var buttonName=$(this).attr('id');
		$("#"+buttonName).hide();
		buttonName=buttonName.substring(9,(buttonName.length));
		reservas["aluno"][reservas["aluno"].indexOf(grupo[buttonName])]
			.confirmacoes.push(nrAlunoLogin);
	});
	$(".seeCommentGrupo").off("click").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(16,(buttonName.length));
		alert(reservas["aluno"][reservas["aluno"].indexOf(grupo[buttonName])].comments);
	});
	$(".seeCommentInd").off("click").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(14,(buttonName.length));
		alert(reservas["aluno"][reservas["aluno"].indexOf(indiv[buttonName])].comments);
	});
	$(".addCommentInd").off("click").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(14,(buttonName.length));
		var comment = prompt("Escreva o seu comentário","");
		if (comment != null && comment != "") 
		{
			reservas["aluno"][reservas["aluno"].indexOf(indiv[buttonName])].comments+="\n"+nrAlunoLogin+":"+comment;
		} 
	});
	$(".addCommentGrupo").off("click").click(function(){
		var buttonName=$(this).attr('id');
		buttonName=buttonName.substring(16,(buttonName.length));
		var comment = prompt("Escreva o seu comentário","");
		if (comment != null && comment != "") 
		{
			reservas["aluno"][reservas["aluno"].indexOf(grupo[buttonName])].comments+="\n"+nrAlunoLogin+":"+comment;
		}
			
	});
});

