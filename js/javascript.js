
function CalGanancia(){
    var ValorCompra = document.f1.ValorCompra.value
    var PorcentajeGanancia = document.f1.PorcentajeGanancia.value
    var PorcentajeIVA = document.f1.PorcentajeIVA.value
    var VV = 0
    var G = 0
    G=parseFloat(ValorCompra)*parseFloat(PorcentajeGanancia/100);
    VV=parseFloat(ValorCompra)*((parseFloat(PorcentajeIVA)/100)+1)+parseFloat(G);
    document.f1.ValorVenta.value=VV;
    document.f1.ValorGanancia.value=G;
  }

function calcular(){
  var a = document.f2.franja1.value;
  var b = document.f2.franja2.value;
  var x = document.f2.franja3.value;
  var z = document.f2.franja4.value;
  var r = document.f2.c.value;
  r1= a.toString()+b.toString();
  r=parseFloat(r1)*parseFloat(x);
  document.f2.c.value=r+" Ohmios con tolerancia del "+z+" Porciento";
}