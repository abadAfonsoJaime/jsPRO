print("Programa de evaluación de notas de alumnos/")

nota_alumno = int( input("Introduce la nota: ") ) # El programa queda a la espera
# python siempre evalua el input() como un string

def evaluacion(nota):
	valoracion=""
	if nota<5:
		valoracion="Suspenso"
	elif nota<6:
		valoracion="Suficiente"
	elif nota<7:
		valoracion="Bien"
	elif nota<9:
		valoracion="Notable"
	else:
		valoracion="Sobresaliente"

	return valoracion

print( evaluacion(nota_alumno) )

'''
	 Cuando hay operadores de comparación encadenados,
	 el flujo de ejecución de Python lee de manera síncrona,
	 de izquierda a derecha.
'''
'''
salario_presidente = int( input("Introduce salario presidente: ") )
print("Salario presidente: " + str(salario_presidente) )

salario_jefe = int( input("Introduce salario jefe: ") )
print("Salario jefe: " + str(salario_jefe) )

salario_administrativo = int( input("Introduce salario administrativo: ") )
print("Salario administrativo: " + str(salario_administrativo) )

if salario_administrativo<salario_jefe<salario_presidente:
	print("Correcto")
else:
	print("Algo falla")
'''

print("Asignaturas optativas Año 2019")
print("Asignaturas optativas: Matemáticas de la combustión - Explosivos - Generadores y Motores")
opcion = input("Escribe la asignatura escogida: ")
asignatura = opcion.lower()

if asignatura in ("matemáticas de la combustión", "explosivos", "generadores y motores"):
	print("Asignatura elegida: " + asignatura.upper())
else:
	print("La asignatura elegida no está contemplada")

