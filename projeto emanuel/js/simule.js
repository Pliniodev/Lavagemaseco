//declaração de variáveis

var sofa2 = 100
var sofa3 = 150
var conjunto = 200

var poltrona = 75

var infantil = 60
var solteiro = 70
var casal = 80
var casalQ = 90
var casalK = 100

var tp1m = 95
var tp2m = 125
var tp3m = 155

var precoAssento = 45


var domicilio = 10
var levaetraz = 20

var total = 0;

//*******************
//FUNÇÃO DIV ESTOFADO
//*******************
function escolherEstofado() {
    var v_estofado = 0;
    var radios = document.getElementsByName("estofado");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            v_estofado = radios[i].value;
        }
    }
    if (v_estofado == 1) { //SOFÁ SELECIONADO
        total = 0;
        selectedAll.style.display = "none";
        selectedTapete.style.display = "none";
        selectedColchao.style.display = "none";
        selectedVeiculo.style.display = "none";
        selectedSofa.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)); //mostrar resultado

    } else if (v_estofado == 2) { //POLTRONA SELECIONADO
        total = poltrona;
        selectedTapete.style.display = "none";
        selectedColchao.style.display = "none";
        selectedVeiculo.style.display = "none";
        selectedSofa.style.display = "none";
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado

    } else if (v_estofado == 3) { //COLCHAO SELECIONADO
        total = 0;
        selectedSofa.style.display = "none";
        selectedAll.style.display = "none";
        selectedTapete.style.display = "none";
        selectedVeiculo.style.display = "none";
        selectedColchao.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado

    } else if (v_estofado == 4) { //TAPETE SELECIONADO
        total = 0;
        selectedSofa.style.display = "none";
        selectedAll.style.display = "none";
        selectedColchao.style.display = "none";
        selectedVeiculo.style.display = "none";
        selectedTapete.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado

    } else if (v_estofado == 5) { //VEÍCULO SELECIONADO
        total = 0;
        selectedSofa.style.display = "none";
        selectedAll.style.display = "none";
        selectedColchao.style.display = "none";
        selectedTapete.style.display = "none";
        selectedVeiculo.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado
    }

} // FIM FUNÇÃO DIV ESTOFADO

//*******************
//FUNÇÃO DIV LUGARES
//*******************

function escolherLugares() {
    var v_lugares = 0;
    var radios = document.getElementsByName("lugares");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            v_lugares = radios[i].value;
        }
    }
    if (v_lugares == 1) {
        total = sofa2;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado
    } else if (v_lugares == 2) {
        total = sofa3;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado
    } else if (v_lugares == 3) {
        total = conjunto;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado
    } else {
        total = 0;
    }
} // FIM FUNÇÃO DIV LUGARES

//*******************
//FUNÇÃO DIV TAMANHO DO COLCHÃO
//*******************

function escolherCTamanho() {
    var v_cTamanho = 0;
    var radios = document.getElementsByName("cTamanho");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            v_cTamanho = radios[i].value;
        }
    }
    if (v_cTamanho == 1) {
        total = infantil;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; //IMPOSSIBILITAR CLIQUE NA DIV
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado
    } else if (v_cTamanho == 2) {
        total = solteiro;
        document.getElementById("boxEstofado").style.pointerEvents = "none";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)); //mostrar resultado   
    } else if (v_cTamanho == 3) {
        total = casal;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)); //mostrar resultado 
    } else if (v_cTamanho == 4) {
        total = casalQ;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)); //mostrar resultado 
    } else if (v_cTamanho == 5) {
        total = casalK;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)); //mostrar resultado 
    }
} //FIM FUNÇÃO TAMANHO DO COLCHÃO

//*******************
//FUNÇÃO DIV TAMANHO DO TAPETE
//*******************

function escolherTpTamanho() {
    var v_tpTamanho = 0;
    var radios = document.getElementsByName("tpTamanho");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            v_tpTamanho = radios[i].value;
        }
    }
    if (v_tpTamanho == 1) {
        total = tp1m;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado
    } else if (v_tpTamanho == 2) {
        total = tp2m;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)); //mostrar resultado   
    } else if (v_tpTamanho == 3) {
        total = tp3m;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        selectedAll.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)); //mostrar resultado 
    } else {
        total = 0;
    }
} // FIM FUNÇÃO DIV TAMANHO DO TAPETE

//*******************
//FUNÇÃO DIV TIPO DO VEÍCULO
//*******************

function escolherTipoVeiculo() {

    var quantAssentos = Number(document.getElementById("assentos").value);
    total = precoAssento * quantAssentos;
    document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)); //mostrar resultado

} // FIM FUNÇÃO DIV TAMANHO DO TAPETE

//*******************
//FUNÇÃO DIV servico
//*******************

function escolherServico() {
    var v_servico = 0;
    var radios = document.getElementsByName("servico");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            v_servico = radios[i].value;
        }
    }
    if (v_servico == 1) {
        total += levaetraz;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        document.getElementById("selectedSofa").style.pointerEvents = "none"; 
        document.getElementById("selectedColchao").style.pointerEvents = "none"; 
        document.getElementById("selectedTapete").style.pointerEvents = "none"; 
        document.getElementById("selectedAll").style.pointerEvents = "none"; 
        fecharPedido.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)) //mostrar resultado

    } else if (v_servico == 2) {
        total += domicilio;
        document.getElementById("boxEstofado").style.pointerEvents = "none"; 
        document.getElementById("selectedSofa").style.pointerEvents = "none"; 
        document.getElementById("selectedColchao").style.pointerEvents = "none";
        document.getElementById("selectedTapete").style.pointerEvents = "none";
        document.getElementById("selectedAll").style.pointerEvents = "none"; 
        fecharPedido.style.display = "block";
        document.getElementById('txtResultado').setAttribute("value", total.toFixed(2)); //mostrar resultado   
    }
} // FIM FUNÇÃO DIV servico
