'''
Ocurren cuando la sintaxis del código es correcta pero durante la ejecución
ha ocurrido "algo inesperado"
'''
def suma(num1, num2):
	return num1+num2

def resta(num1, num2):
	return num1-num2

def multiplica(num1, num2):
	return num1*num2

def divide(num1,num2):
	try:		
		return num1/num2
	except ZeroDivisionError:
		print("No se puede dividir entre 0")
		return "Operación errónea"
	

print("Introduce el primer número: ")

while True:
	try:
		op1=int(input())
		print("Introduce el segundo número:")
		op2=int(input())
		break
	except ValueError:
		print("Los valores introducidos no son numéricos. Inténtalo de nuevo")

	
operacion=input("Introduce la operación a realizar (suma,resta,multiplica,divide): ")

if operacion=="suma":
	print(suma(op1,op2))

elif operacion=="resta":
	print(resta(op1,op2))

elif operacion=="multiplica":
	print(multiplica(op1,op2))

elif operacion=="divide":
	print(divide(op1,op2))

else:
	print ("Operación no contemplada")


print("Operación ejecutada. Continuación de ejecúción del programa ").



# Recoger varias Exceptions encadenadas
def divideFunction():

	print("Introduce el primer número: ")
	try:	
		op1 = float( input() )
		print("Introduce el segundo número: ")
		op2 = float( input() )
		print("La división es: " + str(op1/op2) )

	except ValueError:
		print("El valor introducido es erróneo")
	except ZeroDivisionError:
		print("No se puede dividir entre 0!")

	print("Cálculo finalizado")

dividivideFunctionde()

'''
Si al final de los bloques try except se sitúa un bloque finally,
Este bloque finally se ejecuta siempre

El bloque try tiene que ir acompañado como mínimo de un bloque except
o de un bloque finally
'''