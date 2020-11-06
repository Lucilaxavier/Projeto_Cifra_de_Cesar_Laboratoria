//A B C D E F G H I J K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
//0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25


function codificar() {
  const frase1 = document.getElementById('palavra a cifrar digitada').value;
  const offset = Numero(document.getElementById('deslocamento')).value;
    console.log(typeof offset);
  let codificarfrase1 = '';

  for (let i=0; i<frase1.length; i++) {
    let asciiNum = frase1[i].charCodeAt();
    if (asciiNum >== 65 && asciiNum <= 90) {
       salved+= String.fromCharCode(asciiNum + 13);
    }
  } 
}

export default cipher;
