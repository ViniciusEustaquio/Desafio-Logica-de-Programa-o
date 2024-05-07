function ranking(vit, der) {
  let result = vit - der;

  if (result < 10) {
    console.log("O Herói tem saldo de " + result + " está no nível de Ferro");
  } else if (result >= 10 && result < 20) {
    console.log("O Herói tem saldo de " + result + " está no nível de Bronze");
  } else if (result >= 21 && result < 50) {
    console.log("O Herói tem saldo de " + result + " está no nível de Prata");
  } else if (result >= 51 && result < 80) {
    console.log("O Herói tem saldo de " + result + " está no nível de Ouro");
  } else if (result >= 81 && result < 90) {
    console.log(
      "O Herói tem saldo de " + result + " está no nível de Diamante"
    );
  } else if (result >= 91 && result < 100) {
    console.log(
      "O Herói tem saldo de " + result + " está no nível de Lendario"
    );
  } else {
    console.log("O Herói tem saldo de " + result + " está no nível de imortal");
  }

  return result;
}

ranking(20, 5);
