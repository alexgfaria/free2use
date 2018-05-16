var arraySlotsSelecionados=[];

$(document).ready(function(e)
{
	var nrLugaresFila=8;
	for(var i=1;i<=24;i++)
	{
		var encontrou=false;
		if(nrLugaresFila==0)
		{
			$("#slots").append("<br><br>");
			nrLugaresFila=8;
		}
		for(var j=0;j<arraySlotsSala2.length;j++)
		{
			if(arraySlotsSala2[j].slot==i)
			{
				if(arraySlotsSala2[j].tipo==="ind")
				{
					if(arrayReservasInd[arraySlotsSala2[j].pos]!=null)
					{
						if(!getDataAtual(arrayReservasInd[arraySlotsSala2[j].pos].date,arrayReservasInd[arraySlotsSala2[j].pos].hFim))
						{
							encontrou=true;
							$("#slots").append("<button id=bSlot"+i+" class='btn btn-danger bSlot' style=width:100px>Slot "+i+ "</button>");
						}
					}
				}
				if(arraySlotsSala2[j].tipo==="grupo")
				{
					if(arrayReservasGrupo[arraySlotsSala2[j].pos]!=null)		
					{
						if(!getDataAtual(arrayReservasGrupo[arraySlotsSala2[j].pos].date,arrayReservasGrupo[arraySlotsSala2[j].pos].hFim))
						{
							encontrou=true;
							$("#slots").append("<button id=bSlot"+i+" class='btn btn-danger bSlot' style=width:100px>Slot "+i+ "</button>");
						}
					}
				}		
			}
		}
		if(!encontrou)
		{
			$("#slots").append("<button id=bSlot"+i+" class='btn btn-success bSlot' style=width:100px>Slot "+i+ "</button>");
		}
		if(i%4==0 && i!=8 && i!=16 && i!=24)//Para formar corredor
		{
			$("#slots").append("<button style=width:100px;visibility:hidden>Slot "+i+ "</button>");
		}
		nrLugaresFila--;
	}	
	
	$(".bSlot").click(function() {
		
		if($(this).attr("class")==="btn btn-success bSlot")
		{
			$(this).removeClass();
			$(this).addClass("btn btn-danger bSlot");
			slot=$(this).attr("id");
			slot=slot.substring(5,slot.length);
			arraySlotsSelecionados.push(slot);
		}
	});

	$("#bEscolherLugar").click(function(){

		if(valor==="rIndividual")
		{
			if(arraySlotsSelecionados.length>1)
			{
				for(var i=0;i<arraySlotsSelecionados.length;i++)
				{
					$("#bSlot"+arraySlotsSelecionados[i]).removeClass();
					$("#bSlot"+arraySlotsSelecionados[i]).addClass("btn btn-success bSlot");
				}
				arraySlotsSelecionados=[];
				alert("Na reserva individual apenas pode reservar um slot.");
			}
			else
			{
				arrayReservasInd[indiceReserva].slot=arraySlotsSelecionados[0];
				arraySlotsSala2.push({tipo:"ind",pos:indiceReserva,slot:arraySlotsSelecionados[0]});
				alert("Reserva efetuada.");
				load("html/aluno.html");
			}
		}
		else if(valor==="rGrupo")
		{
			if(arraySlotsSelecionados.length<nrElementosGrupo+1 || !verificaSlotsJuntos())
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
					arrayReservasGrupo[indiceReserva].slot+=arraySlotsSelecionados[i];
					arraySlotsSala2.push({tipo:"grupo",pos:indiceReserva,slot:arraySlotsSelecionados[i]});
					if(i<arraySlotsSelecionados.length-1)
					{
						arrayReservasGrupo[indiceReserva].slot+=",";
					}
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
});
