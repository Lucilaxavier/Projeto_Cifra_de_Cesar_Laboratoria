function encode() {
  
  let codificarfrase1 = 'DEF';
  let offset = parseInt('2')
  let texto = '';
    
      for (let i=0; i< codificarfrase1.length; i++) { 
        let formula = (codificarfrase1.charCodeAt(i) - 65 + offset % 26) + 65 
        texto += String.fromCharCode(formula) 
              
      } //else {
        console.log(texto)
      //console.log('Entra')
    }

encode();
