/*class sala {
  constructor(nome, andar, lugares) {
    this.nome = nome;
    this.andar = andar;
    this.lugares = lugares;
  }
}
*/

$("document").ready(function(e)
{

	$("#abrir").click(function(e)
	{
		//var salaselecionada = salasabertas.find(x => x.nome === ocument.getElementById('nome').value)
		//salasfechadas.push(salaselecionada[0]);
		load("html/tecnico/"+"opconcluida"+".html");
	});

	$("#adicionar").click(function(e)
	{
		//var nome= document.getElementById('nome').value
		//var andar = document.getElementById('andar').value
		//var lugares = document.getElementById('lugares').value
		//var newroom= new sala(nome, andar, lugares );
		//salasabertas.push(newroom);
		load("html/tecnico/"+"opconcluida"+".html");
		//document.write(salasabertas[0].nome);
	});
	
	$("#fechar").click(function(e)
	{
		//var salaselecionada = salasfechadas.find(x => x.nome === document.getElementById('nome').value)
		//salasabertas.push(salaselecionada[0]);
		load("html/tecnico/"+"opconcluida"+".html");
	});

	$("#remover").click(function(e)
	{
		/*var salaselecionada = salasabertas.find(x => x.nome === document.getElementById('nome').value) //verifica se este objeto esta no array
		if ($salaselecionada.length == 0) {
			remove(document.getElementById('nome').value,salasfechadas)
		}
		else{
			remove(document.getElementById('nome').value,salasabertas)
		}*/
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




function remove(nome, arr){
	for(var i = arr.length - 1; i >= 0; i--) {
    if(arr[i].nome === nome) {
       arr.splice(i, 1);
   	 }
	}
}

/*
*/
var salasabertas = [];
var salasfechadas = [];

/*

 					 <option value="Sala 1"> <center> Sala 1 </center></option>
 	 		         <option value="Sala 2"><center> Sala 2 </center></option>
 	 		         <option value="Sala 3"><center> Sala 3 </center></option>
 	 		         <option value="Anfiteatro 1"><center> Anfiteatro 1 </center></option>
 	 		         <option value="Laboratorio"><center> Núcleo </center></option>

*/