$("#document").ready(function(e){
  for (var i = 0; i < reservas["prof"].length; i++) {
    var prof = reservas["prof"][i];
    $("#reservas").append("<h3>Reserva "+i+"</h3>");
    $("#reservas").append("<b>Sala</b>: " + prof["sala"]+"<br>");
    $("#reservas").append("<b>Data da reserva</b>: "+prof["data"]+"<br>");
    $("#reservas").append("<b>Hora de início</b>: "+prof["begin"]+"<br>");
    $("#reservas").append("<b>Hora fim</b>: "+prof["end"]+"<br>");
    $("#reservas").append("<b>Mesas reservadas</b>: "+prof["slot"]+"<br>");
  }
});
