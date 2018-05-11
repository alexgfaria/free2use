$("document").ready(function(e)
{
	$("#action").click(function(e)
	{
		//load("html/tecnico/"+"concluido"+".html");
		load("html/tecnico/"+"opconcluida"+".html");
	});

});


$("document").ready(function(e)
{
	$("#hometec").click(function(e)
	{
		//load("html/tecnico/"+"concluido"+".html");
		load("html/"+"tecnico"+".html");
	});

});

$("document").ready(function(e)
{
	$("#retornar").click(function(e)
	{
		//load("html/tecnico/"+"concluido"+".html");
		parent.history.back();
	});

});

/*
	<div class="form-group row">
	     <div class="col-lg-5"> </div>
	     <div class="col-lg-2">
        	<button type="button" class="btn-info btn-lg" id="retornar">
          		<span class="glyphicon glyphicon-arrow-left"></span>Re 
       		</button>
   		 </div>
    </div>
*/