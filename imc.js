//pegar os elementos com id, pelo javascript
//variaveis globais
const calcular = document.getElementById('calcular');

function imc() {
  // variaveis locais
  const nome = document.getElementById('nome').value;
  const altura = document.getElementById('altura').value;
  const peso = document.getElementById('peso').value;

  if (peso !== '' && altura !== '' && nome !== '') {

    const valorIMC = (peso / (altura * altura)).toFixed(2);

    if (valorIMC <= 16.00) {
      alert(nome +' seu IMC está na categoria Baixo Peso Grau III');

    } else if (valorIMC >= 16.00 && valorIMC <= 16.99) {
      alert(nome +' seu IMC está na categoria Baixo Peso Grau II');

    } else if (valorIMC >= 17.00 && valorIMC <= 18.49) {
      alert(nome +' seu IMC está na categoria Baixo Peso Grau I');
    
    } else if (valorIMC >= 18.50 && valorIMC <= 24.99) {
      alert(nome+ ' seu IMC está no peso ideal');

    } else if (valorIMC >= 25.00 && valorIMC <= 29.99) {
      alert(nome+ ' seu IMC está na categoria Obesidade Grau I');

    } else if (valorIMC >= 30.00 && valorIMC <= 34.99) {
      alert(nome+ ' seu IMC está na categoria Obesidade Grau II');

    } else if (valorIMC >= 35.00) {
      alert(nome+ ' seu IMC está na categoria Obesidade Grau III');

    } else {
      alert("Ops, preencha todos os campos");
    }
  }
}

calcular.addEventListener('click', imc);