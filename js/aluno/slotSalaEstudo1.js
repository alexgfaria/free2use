var arraySlotsSelecionados=[];
var arraySlotsSala2=[];

$(document).ready(function(e)
{
	arraySlotsSala2=[];
	var nrLugaresFila=8;
	var nr_slots = salas[0].nr_slots;
	reservas.prof.forEach(function(reserva,index)
	{
		if(reserva.sala === salaEstudo)
		{
			arraySlotsSala2.push({tipo:"prof",pos:index,slot:reserva.slot});
		}
	});
	reservas.aluno.forEach(function(reserva,index)
	{
		if(reserva.sala === salaEstudo)
		{
			arraySlotsSala2.push({tipo:reserva.tipo,pos:index,slot:reserva.slot});
		}
	});	
	for(var i=1;i<=nr_slots;i++)
	{
		var encontrou=false;
		if(nrLugaresFila==0)
		{
			$("#slots").append("<br><br>");
			nrLugaresFila=8;
		}
		for(var j=0;j<arraySlotsSala2.length;j++)
		{
			if(arraySlotsSala2[j].slot.includes(""+i))
			{
				if(arraySlotsSala2[j].tipo==="prof")
				{
						var dataEscolhida=reservas["aluno"][indiceReserva].data;
						var hInicioEscolhida=reservas["aluno"][indiceReserva].begin;
						var hFimEscolhida=reservas["aluno"][indiceReserva].end;
						var pos= arraySlotsSala2[j].pos;
						if(getDataAtual(reservas["prof"][arraySlotsSala2[j].pos].data,reservas["prof"][arraySlotsSala2[j].pos].end))
						{//A data já passou
							encontrou=true;
							$("#slots").append("<button id=bSlot"+i+" class='btn btn-success bSlot' style=width:100px>Slot "+i+ "</button>");
						}else if(!verificaColisoesDatas(dataEscolhida,hInicioEscolhida,hFimEscolhida,"prof",pos)){
							//A data é no futuro, e verifica conlisões
							encontrou=true;
							$("#slots").append("<button id=bSlot"+i+" class='btn btn-danger bSlot' style=width:100px>Slot "+i+ "</button>");
						}
						/*if(!getDataAtual(reservas["prof"][arraySlotsSala2[j].pos].data,reservas["prof"][arraySlotsSala2[j].pos].end))
						{
							encontrou=true;
							$("#slots").append("<button id=bSlot"+i+" class='btn btn-danger bSlot' style=width:100px>Slot "+i+ "</button>");
						}*/
				}
				if(arraySlotsSala2[j].tipo==="grupo" || arraySlotsSala2[j].tipo==="ind")
				{
						var dataEscolhida=reservas["aluno"][indiceReserva].data;
						var hInicioEscolhida=reservas["aluno"][indiceReserva].begin;
						var hFimEscolhida=reservas["aluno"][indiceReserva].end;
						var pos= arraySlotsSala2[j].pos;

						if(getDataAtual(reservas["aluno"][arraySlotsSala2[j].pos].data,reservas["aluno"][arraySlotsSala2[j].pos].end))
						{//A data já passou
							encontrou=true;
							$("#slots").append("<button id=bSlot"+i+" class='btn btn-success bSlot' style=width:100px>Slot "+i+ "</button>");
						}else if(!verificaColisoesDatas(dataEscolhida,hInicioEscolhida,hFimEscolhida,"aluno",pos)){

							//A data é no futuro, e verifica conlisões
							encontrou=true;
							$("#slots").append("<button id=bSlot"+i+" class='btn btn-danger bSlot' style=width:100px>Slot "+i+ "</button>");
						}
						/*if(!getDataAtual(reservas["aluno"][arraySlotsSala2[j].pos].data,reservas["aluno"][arraySlotsSala2[j].pos].end))
						{
							//if(verificaReservaProf(i))
							//{
							encontrou=true;
							$("#slots").append("<button id=bSlot"+i+" class='btn btn-danger bSlot' style=width:100px>Slot "+i+ "</button>");
							//}
						}*/
				}
			}
		}
		if(!encontrou)
		{
			$("#slots").append("<button id=bSlot"+i+" class='btn btn-success bSlot' style=width:100px>Slot "+i+ "</button>");
		}
		if(i%4==0 && i%8!=0)//Para formar corredor
		{
			$("#slots").append("<button style=width:100px;visibility:hidden>Slot "+i+ "</button>");
		}
		nrLugaresFila--;
	}

	$(".bSlot").off("click").click(function() {

		if($(this).attr("class")==="btn btn-success bSlot")
		{
			$(this).removeClass();
			$(this).addClass("btn btn-danger bSlot");
			slot=$(this).attr("id");
			slot=slot.substring(5,slot.length);
			arraySlotsSelecionados.push(slot);
		}
	});

	$("#bEscolherLugar").off("click").click(function(){

		if(valor==="rIndividual")
		{
			if(arraySlotsSelecionados.length>1 )
			{
				for(var i=0;i<arraySlotsSelecionados.length;i++)
				{
					$("#bSlot"+arraySlotsSelecionados[i]).removeClass();
					$("#bSlot"+arraySlotsSelecionados[i]).addClass("btn btn-success bSlot");
				}
				arraySlotsSelecionados=[];
				alert("Na reserva individual apenas pode reservar um slot.");
			}
			else if(arraySlotsSelecionados.length == 1){
				reservas["aluno"][indiceReserva].slot.push(arraySlotsSelecionados[0]);
				arraySlotsSala2.push({tipo:"ind",pos:indiceReserva,slot:arraySlotsSelecionados[0]});
				alert("Reserva efetuada.");
				load("html/aluno.html");
			}
			else{
				alert("É necessário escolher um slot para concluir a reserva.");
			}
		}
		else if(valor==="rGrupo")
		{
			if(arraySlotsSelecionados.length!=nrElementosGrupo+1 || !verificaSlotsJuntos())
			{
				for(var i=0;i<arraySlotsSelecionados.length;i++)
				{
					$("#bSlot"+arraySlotsSelecionados[i]).removeClass();
					$("#bSlot"+arraySlotsSelecionados[i]).addClass("btn btn-success bSlot");
				}
				arraySlotsSelecionados=[];
				alert("Na reserva de grupo tem de reservar os slots dos outros elementos e todos seguidos.");
			}
			else
			{
				for(var i=0;i<arraySlotsSelecionados.length;i++)
				{
					reservas["aluno"][indiceReserva].slot.push(arraySlotsSelecionados[i]);
					arraySlotsSala2.push({tipo:"grupo",pos:indiceReserva,slot:arraySlotsSelecionados[i]});
				}
				alert("Reserva efetuada.");
				load("html/aluno.html");
			}
		}
	});

	function verificaSlotsJuntos()
	{
		arraySlotsSelecionados.sort();
		var slotsJuntos=true;
		for(var i=0;i<arraySlotsSelecionados.length-1;i++)
		{
			if(arraySlotsSelecionados[i+1]-arraySlotsSelecionados[i]!=1)
			{
				slotsJuntos=false;
			}
		}
		return slotsJuntos;
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
	}

function verificaColisoesDatas(dataEscolhida,hInicioEscolhida,hFimEscolhida,tipo,pos)
{
		if(reservas[tipo][pos].data === dataEscolhida)
		{
			if(hInicioEscolhida <= reservas[tipo][pos].begin && hFimEscolhida >= reservas[tipo][pos].begin)
			{
				return false;
			}
			if(hInicioEscolhida >= reservas[tipo][pos].begin && hInicioEscolhida <= reservas[tipo][pos].end)
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
			return true;
		}

	/*if(tipo==="ind" || tipo==="grupo")
	{

		if(reservas["aluno"][pos].data === dataEscolhida)
		{
			if(reservas["aluno"][pos].begin >= hInicioEscolhida && reservas["aluno"][pos].begin <= hFimEscolhida)
			{
				return false;
			}
			if(reservas["aluno"][pos].end >= hInicioEscolhida && reservas["aluno"][pos].end <= hFimEscolhida)
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		else
		{
			return true;
		}
	}*/
}
});
