function converter(){
    var valorId = document.getElementById("valor1").value;
    var valorEmReal = parseFloat(valorId).toFixed(2);

    var valorEmDolar = valorEmReal * 5;
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = ("$ " + valorEmDolar);
    elementoValorConvertido.innerHTML = valorConvertido;
}

function converter1(){
    var valorElemento = document.getElementById("valor").value;
    var valorEmReal = parseFloat(valorElemento);

    var valorEmEuro = valorEmReal * 6.23;
    
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = ("EUR " + valorEmEuro);
    elementoValorConvertido.innerHTML = valorConvertido;
}