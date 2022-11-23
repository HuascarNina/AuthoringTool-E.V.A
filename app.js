//var primera_pregunta = document.getElementsByName("pregunta_1")
// alert(primera_pregunta)

var respuestaCorrecta1 = -1;
var respuestaCorrecta2 = -1;
var respuestaCorrecta3 = -1;
var respuestaCorrecta4 = -1;
var respuestaCorrecta5 = -1;

function convertirCuestionario() {

   // alert($('input[name=pregunta1]:checked', '#questionBox-1').val());

    var pregunta1_input = document.getElementById("P1");
    var pregunta1_span = document.getElementById("S1");
    var pregunta2_input = document.getElementById("P2");
    var pregunta2_span = document.getElementById("S2");
    var pregunta3_input = document.getElementById("P3");
    var pregunta3_span = document.getElementById("S3");
    var pregunta4_input = document.getElementById("P4");
    var pregunta4_span = document.getElementById("S4");
    var pregunta5_input = document.getElementById("P5");
    var pregunta5_span = document.getElementById("S5");
    
    pregunta1_span.remove();
    pregunta1_input.setAttribute("disabled","");
    pregunta2_span.remove();
    pregunta2_input.setAttribute("disabled","");
    pregunta3_span.remove();
    pregunta3_input.setAttribute("disabled","");
    pregunta4_span.remove();
    pregunta4_input.setAttribute("disabled","");
    pregunta5_span.remove();
    pregunta5_input.setAttribute("disabled","");

    var p1Respues1_input = document.getElementById("R11");
    var p1Respues1_span = document.getElementById("SR11");
    var p1Respues2_input = document.getElementById("R12");
    var p1Respues2_span = document.getElementById("SR12");
    var p1Respues3_input = document.getElementById("R13");
    var p1Respues3_span = document.getElementById("SR13");
    var p1Respues4_input = document.getElementById("R14");
    var p1Respues4_span = document.getElementById("SR14");

    p1Respues1_span.remove();
    p1Respues2_span.remove();
    p1Respues3_span.remove();
    p1Respues4_span.remove();
    p1Respues1_input.setAttribute("disabled","");
    p1Respues2_input.setAttribute("disabled","");
    p1Respues3_input.setAttribute("disabled","");
    p1Respues4_input.setAttribute("disabled","");


    var p2Respues1_input = document.getElementById("R21");
    var p2Respues1_span = document.getElementById("SR21");
    var p2Respues2_input = document.getElementById("R22");
    var p2Respues2_span = document.getElementById("SR22");
    var p2Respues3_input = document.getElementById("R23");
    var p2Respues3_span = document.getElementById("SR23");
    var p2Respues4_input = document.getElementById("R24");
    var p2Respues4_span = document.getElementById("SR24");

    p2Respues1_span.remove();
    p2Respues2_span.remove();
    p2Respues3_span.remove();
    p2Respues4_span.remove();
    p2Respues1_input.setAttribute("disabled","");
    p2Respues2_input.setAttribute("disabled","");
    p2Respues3_input.setAttribute("disabled","");
    p2Respues4_input.setAttribute("disabled","");

    var p3Respues1_input = document.getElementById("R31");
    var p3Respues1_span = document.getElementById("SR31");
    var p3Respues2_input = document.getElementById("R32");
    var p3Respues2_span = document.getElementById("SR32");
    var p3Respues3_input = document.getElementById("R33");
    var p3Respues3_span = document.getElementById("SR33");
    var p3Respues4_input = document.getElementById("R34");
    var p3Respues4_span = document.getElementById("SR34");

    p3Respues1_span.remove();
    p3Respues2_span.remove();
    p3Respues3_span.remove();
    p3Respues4_span.remove();
    p3Respues1_input.setAttribute("disabled","");
    p3Respues2_input.setAttribute("disabled","");
    p3Respues3_input.setAttribute("disabled","");
    p3Respues4_input.setAttribute("disabled","");

    var p4Respues1_input = document.getElementById("R41");
    var p4Respues1_span = document.getElementById("SR41");
    var p4Respues2_input = document.getElementById("R42");
    var p4Respues2_span = document.getElementById("SR42");
    var p4Respues3_input = document.getElementById("R43");
    var p4Respues3_span = document.getElementById("SR43");
    var p4Respues4_input = document.getElementById("R44");
    var p4Respues4_span = document.getElementById("SR44");

    p4Respues1_span.remove();
    p4Respues2_span.remove();
    p4Respues3_span.remove();
    p4Respues4_span.remove();
    p4Respues1_input.setAttribute("disabled","");
    p4Respues2_input.setAttribute("disabled","");
    p4Respues3_input.setAttribute("disabled","");
    p4Respues4_input.setAttribute("disabled","");

    var p5Respues1_input = document.getElementById("R51");
    var p5Respues1_span = document.getElementById("SR51");
    var p5Respues2_input = document.getElementById("R52");
    var p5Respues2_span = document.getElementById("SR52");
    var p5Respues3_input = document.getElementById("R53");
    var p5Respues3_span = document.getElementById("SR53");
    var p5Respues4_input = document.getElementById("R54");
    var p5Respues4_span = document.getElementById("SR54");

    p5Respues1_span.remove();
    p5Respues2_span.remove();
    p5Respues3_span.remove();
    p5Respues4_span.remove();
    p5Respues1_input.setAttribute("disabled","");
    p5Respues2_input.setAttribute("disabled","");
    p5Respues3_input.setAttribute("disabled","");
    p5Respues4_input.setAttribute("disabled","");

}

function vaciarCuestionario(){
    location.reload();
}

