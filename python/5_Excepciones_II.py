import math

def evaluaEdad(edad):

	if edad < 0:
		# lanzamiento de excepción
		raise TypeError("No se permiten edades negativas")
		# Fin del programa
		raise ZeroDivisionError("No se permiten edades negativas")

	if edad < 20:
		return "eres muy joven"
	elif edad < 40:
		return "eres joven"
	elif edad < 65:
		return "eres maduro"
	else:
		return "cuídate..."

print( evaluaEdad(0) )

def calculaRaiz(num1):
	
	if num1 < 0:
		raise ValueError("La raíz cuadrada de un número negativo no existe")
	else:
		return math.sqrt(num1)

print("Introduce un número")
op1 = int( input() )
try:
	print( calculaRaiz(op1) )
except ValueError as ErrorRaizNegativa:
	print(ErrorRaizNegativa)
print("Programa terminado")