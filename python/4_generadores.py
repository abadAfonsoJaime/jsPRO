'''
	Estructuras que extraen valores de una función y se almacenan en objetos iterables (que se pueden recorrer)
	Cada vez que un generador almacena un valor, permanece en un estado pausado hasta que se solicita el siguiente
	"Suspensión en estado" 

	Son más eficientes que las funciones tradicionales
	Son muy útiles con listas de valores infinitos (random IP adresses)
	Bajo determinados escenarios, será muy útil que un generador devuelva los valores de uno en uno.

	La instrucción yield

'''
def funcionPares(limite):

 	num=1
 	miLista=[]

 	while num<limite:
 		miLista.append(num*2)
 		num=num+1

 	return miLista

print( funcionPares(10) )


def generadorPares(limite):

 	num=1

 	while num<limite:
 		yield num*2 # Construye un objeto iterable almacenando valores de uno en uno
 		num=num+1

devuelvePares=generadorPares(10) # Almacenamos el objeto iterable del generador

# for i in devuelvePares:
#	print(i)

print( next(devuelvePares) ) # Entra en suspensión
print("Aquí podría ir más código...")
print( next(devuelvePares) ) # Ahorra recursos
print("Aquí podría ir más código...")
print( next(devuelvePares) ) # Solo resrva memoria para los elementos generados

'''
yield from
Sìmplifica el código de los generadores en el caso de utilizar bucles anidados
Esto es arrays de dos dimensiones donde la segunda está dentro de la primera
'''
print("\nCiudades:")
def devuelve_ciudades(*ciudades): # Recibe un numero indeterminado de elementos en forma de tupla
	for el in ciudades:
		yield el

ciudades_devueltas = devuelve_ciudades("Madrid", "Barcelona", "Bilbao", "Valencia")

print( next(ciudades_devueltas) )
print( next(ciudades_devueltas) )

print("\nLetras:")
def letras_ciudades(*ciudades): # Recibe un numero indeterminado de elementos en forma de tupla
	for el in ciudades:
		for subElem in el:
			yield subElem

letras_devueltas = letras_ciudades("Madrid", "Barcelona", "Bilbao", "Valencia")

print( next(letras_devueltas) )
print( next(letras_devueltas) )
print( next(letras_devueltas) )
print( next(letras_devueltas) )
print( next(letras_devueltas) )

print("\nyield from:")
def letras_ciudades(*ciudades): # Recibe un numero indeterminado de elementos en forma de tupla
	for el in ciudades:
		yield from el

letras_devueltas = letras_ciudades("Madrid", "Barcelona", "Bilbao", "Valencia")

print( next(letras_devueltas) )
print( next(letras_devueltas) )
print( next(letras_devueltas) )