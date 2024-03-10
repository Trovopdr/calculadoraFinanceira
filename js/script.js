function fazerCalculo() {
    var totalGasto = Number(valorGasto.value);
    var areaTotal = Number(tamanhoArea.value);
    var nPulverizadores = Number(numeroPulv.value);
    var qtdFungida = Number(qtdFung.value) * 1000;
    var areaHectar = areaTotal / 10000;
    var calcFungHec = qtdFungida / nPulverizadores;
    var precoFungi = 39.90;
    var valorGastofung = calcFungHec * precoFungi;
    var desconto = totalGasto - valorGastofung;

    console.log(qtdFungida);

    /*valorCorreto.innerHTML = `Para sua área de ${areaHectar} hectares você precisará de ${calcFungHec}Ls de fungicida gastando um total de R$${valorGastofung.toFixed(2)}`
    valorCorreto.innerHTML += ` Economizando um total de R$${desconto.toFixed(2)}`*/
    const para = document.createElement("div");
    para.innerText = "This is a paragraph";
    document.body.appendChild(para);
    /*if(totalGasto < 0){
        valorCorreto.innerHTML = `Insira um número maior ou igual a 0`;
    }*/

}

