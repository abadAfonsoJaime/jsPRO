import math
'''
for i in [1,2,3,4,5,6,7,8,9,10]:
	print( str(i) + "ª iteración")

for i in range(5):
	print(str(i) + "ª iteración")

for i in range(5, 20, 3):
	print(f"valor de la variable {i}")
'''

'''
contador=0
promptEmail = input("Introduce tu email: ")

for i in promptEmail:

	if (i=="@" or i=="."):
		contador = contador+1

if contador<2:
	print("Email Incorrecto")
else:
	print("Email es correcto")



valido = False

email = input("Intruduce tu email: ")

for i in range( len(email) ):
	
	if email[i] == "@":
		valido = True

if valido:
	print("Email correcto")
else:
	print("Email Incorrecto")

'''

print("Programa de cálculo de raíz cuadrada")
numero = int( input("Intruduce un número por favor: ") )

intentos = 0

while numero<0:
	print("No se puede hallar la raíz de un número negativo")
	intentos = intentos + 1
	print(f"intento nº {intentos}")

	if intentos == 2:
		print("Has consumido demasiados intentos. El programa a finalizado")
		break # Salir de bucle

	if numero < 0:
		numero = int( input("Introduce un número por favor: ") )

if intentos<2:
	intentos = intentos + 1
	solucion = math.sqrt(numero)
	print("La raíz cuadrad de " + str(numero) + " es " + str(solucion) )
	print(f"intento nº {intentos}")


# continue pasa directamente a la siguiente iteración del bucle
# pass hace que el bucle devuelva null --> Se utiliza al definir clases o en modo DEV

for letra in "Python":
	print(f"Viendo la letra: {letra.upper()}")

nombre = "Pildoras Informaticas"
contador = 0

for i in nombre:

	if i == " ":
		continue
	contador += 1

print(contador)
'''
while True:
	pass

class MiClase:
	pass # Para implementar más tarde
'''

correo = input("Mete el correo: ")
for i in correo:

	if i == "@":
		arroba=True
		break;

else: # forma parte del bucle for
	arroba=False

print(arroba)

'''
La introducción de un else dentro de un bucle for o while, no represente la anteposición del if,
sino que se ejecuta cuando el bucle esté vacío, es decir si ya ha completado todas las iteraciones.
Solo entonces el flujo de ejecución del programa entra en el else
'''