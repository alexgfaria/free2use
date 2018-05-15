$("#document").ready(function(e){
  for (var i = 0; i < reservas["prof"].length; i++) {
    var prof = reservas["prof"][i];
    $("#reservas").append("Sala: " + prof["sala"]+"<br> Data"+prof["data"]+"<br> Hora inicío: "
    +prof["begin"]+"<br> Hora fim: "+prof["end"]+"<br>Lugares na sala: "+prof["slot"]+"<br>");
  }
});
