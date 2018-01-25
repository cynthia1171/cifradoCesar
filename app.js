/**
 * Consideraciones Específicas
 * Tu programa debe ser capaz de cifrar y descifrar tanto letras mayúsculas como minúsculas. La fórmula para descifrar es: (x - n) % 26
 * Tu código debe estar compuesto por 2 funciones con los siguientes nombres: cipher y decipher
 * El usuario no debe poder ingresar un campo vacío o que contenga números
 */

/* variable local para saber si es solo texto */
var validaTexto = /^[a-zA-Z]*$/;

/* funcion principal */
function principal(resp) {
  do {
  	/* pide al usuario que ingrese la opcion para ejecutar alguna de las funciones */
  	var resp = prompt('que desea hacer: 1. Cifrar texto - 2. Decifrar texto');
  	/* si la respuesta es distinta a un campo vacío */
  	if (resp !== '') {
  		/* si la respuesta es "1", se ejecuta la funcion cipher() */
  		if (resp === '1') {
  			cipher();
  			/* si la respuesta es "2", se ejecuta la funcion decipher() */
  		} else if (resp === '2') {
  			decipher();
  		} else {
  			alert('ingrese opcion valida');
  		}
  	}
  	/* si la respuesta esta vacía o distinta a 1 o 2 */
  } while (resp === '' || (resp !== '1' && resp !== '2'));
}

/* texto ingresado a cifrado de cesar */
function cipher(string) {
  do {
    /* se pide el texto a cifrar */
    string = prompt('Ingrese el texto a cifrar');
    /* valido si la cadena ingresada es un campo vacio o si contiene numeros. */
    if (string === '' || string.search(validaTexto)) {
      alert('no puede ingresar ni numeros ni campos vacios');
      continue;
    }
    var ascii = []; /* arreglo vacio para guardar el codigo ascii */
    var cipherString = []; /* arreglo vacio para guardar el nuevo string cifrado */
    /* primer for para recorrer el texto ingresado */
    for (var i = 0; i < string.length; i++) {
      /* realizo un if para saber si el caracter es minuscula o mayuscula. */
      if (string[i] === string[i].toUpperCase()) {
        /* obtengo el codigo ascii y lo pongo en un arreglo "ascii"--A-Z */
        ascii.push((string.charCodeAt(i) - 65 + 33) % 26 + 65);
      } else if (string[i] === string[i].toLowerCase()) {
        /* obtengo el codigo ascii y lo pongo en un arreglo "ascii"--a-z */
        ascii.push((string.charCodeAt(i) - 97 + 33) % 26 + 97);
      }
    }
    /* recorro el arreglo "ascii" */
    for (var j = 0; j < ascii.length; j++) {
      /* transformo a letra lo obtenido en el for anterior y lo meto en otro arreglo "cipherString" */
      cipherString.push(String.fromCharCode(ascii[j]));
    }
    document.write('el cifrado de ' + string + ' es: ' + cipherString.join('')); /* lo muestro en pantalla el texto original y el cifrado */
    return alert(cipherString.join('')); /* retorna en un alert el texto cifrado */
  } while (string === '' || string.search(validaTexto)); /* mientras el string no este vacio y encuentre numeros en el string. */
}

/* funcion para decifrar el texto */
function decipher(string) {
  do {
    /* se pide el texto a decifrar*/
    string = prompt('Ingrese el texto a decifrar');
    /* valido si la cadena ingresada es un campo vacio o si contiene numeros. */
    if (string === '' || string.search(validaTexto)) {
      alert('no puede ingresar ni numeros ni campos vacios');
      continue;
    }
    var ascii = []; /* arreglo vacio para guardar el codigo ascii */
    var decipherString = []; /* arreglo vacio para guardar el nuevo string decifrado */
    /* primer for para recorrer el texto ingresado */
    for (var i = 0; i < string.length; i++) {
      /* realizo un if para saber si el caracter es minuscula o mayuscula. */
      if (string[i] === string[i].toUpperCase()) {
        /* obtengo el codigo ascii y lo pongo en un arreglo "ascii"--Z-A */
        ascii.push((string.charCodeAt(i) - 90 - 33) % 26 + 90);
      } else if (string[i] === string[i].toLowerCase()) {
        /* obtengo el codigo ascii y lo pongo en un arreglo "ascii"--z-a */
        ascii.push((string.charCodeAt(i) - 122 - 33) % 26 + 122);
      }
    }
    /* recorro el arreglo "ascii" */
    for (var j = 0; j < ascii.length; j++) {
      /* transformo a letra lo obtenido en el for anterior y lo meto en otro arreglo "decipherString" */
      decipherString.push(String.fromCharCode(ascii[j]));
    }
    document.write('el decifrado de ' + string + ' es: ' + decipherString.join('')); /* muestra el texto cifrado y el decifrado en la pagina */
    return alert(decipherString.join('')); /* retorna en un alert el texto decifrado */
  } while (string === '' || string.search(validaTexto)); /* mientras el string no este vacio y encuentre numeros en el string.	 */
}

/* se ejecuta la funcion principal */
principal();

