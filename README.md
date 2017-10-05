# Cifrado de César

En este README se detalla el funcionamiento del cifrado de César. 
Se creó una web que pide, por medio de un prompt(), una frase al usuario y devuelva el mismo mensaje encriptado según el algoritmo de Cifrado César con el parámetro de desplazamiento de 33 espacios hacia la derecha.

Este README contiene:

  - Pseudocódigo
  - Diagrama de flujo

### Pseudocódigo

```
  Funcion resp <- principal ( resp )
	Repetir
		Escribir "desea: 1-cifrar  2-decifrar"
		Si resp!="" Entonces
			Si resp="1" Entonces
				cipher()
			Sino Si resp="2" Entonces
					decipher()
			Sino 
				Escribir "ingrese opcion valida"
			Fin Si
		Fin Si
	Hasta Que resp = "" | (resp!="1" & resp!="2") 
Fin Funcion

Funcion cipherString <- cipher ( string )
	Repetir
		Escribir "Ingresar texto"
		Si string="" | string!=texto Entonces
			Escribir "no se puede ingresar ni numeros ni campos vacios"
		Fin Si
		Para i<-0 Hasta largoString Con Paso 1 Hacer
			Si string="mayuscula" Entonces
				Leer ascii.push((string.charCodeAt(i)-65+33)%26+65)
			Sino
				Leer ascii.push((string.charCodeAt(i)-97+33)%26+97)
			Fin Si
		Fin Para
		Para j<-0 Hasta largoArreglo Con Paso 1 Hacer
			Leer decipherString.push(String.fromCharCode(ascii[j]))
		Fin Para
	Hasta Que string="" | string!=letras
	Leer cipherString
Fin Funcion

Funcion decipherString <- decipher ( string )
	Repetir
		Escribir "Ingresar texto"
		Si string="" | string!=texto Entonces
			Escribir "no se puede ingresar ni numeros ni campos vacios"
		Fin Si
		Para i<-0 Hasta string.length Con Paso 1 Hacer
			Si string="mayuscula" Entonces
				Leer ascii.push((string.charCodeAt(i)-90-33)%26+90)
			Sino
				Leer ascii.push((string.charCodeAt(i)-122-33)%26+122)
			Fin Si
		Fin Para
		Para j<-0 Hasta ascii.length Con Paso 1 Hacer
			Leer decipherString.push(String.fromCharCode(ascii[j]))
		Fin Para
	Hasta Que string="" | string!=letras
	Leer decipherString
Fin Funcion

Algoritmo cifradoCesar
	principal()
FinAlgoritmo

```

### Diagrama de flujo

![Diagrama de flujo cifrado de César](https://ibb.co/hUCKab)
[Diagrama de flujo](https://ibb.co/hUCKab)

