listaNames = ["Jaime", "Luis", "Sonsoles"]
#print(listaNames)
#print(listaNames[0])

listaNames.extend(["Ana", "Luismi"])
#print(listaNames)

listaNames.remove("Luis")
#print(listaNames)

listaNames.append("Carlos")
#print(listaNames)

listaNames.pop()
listaNames.pop()
listaNames.pop()
#print(listaNames)
listaNames.pop()
#print(listaNames)

otraLista = [23, False]
concatListas = listaNames + otraLista
#print(concatListas)

repetidorListas = [12, "toma", "dale"] * 3
#print(repetidorListas)


''' TUPLAS
----------
Son inmutables tras su creación (no append, extend, remove)
Si permiten extraer porciones, pero el resultado de la extracción es una tupla nueva
Si permiten comprobar si un elemento se encuentra en la tupla

Son más rápidas y ocupan menos espacio (mayor optimización)
Formatean strings
Pueden utilizarse como claves en un diccionario (las listas no pueden)
'''
miTupla=("Juan", 13, 1, 13)
miLista=list(miTupla)
#print(miLista)
#print(miTupla[2])
parseToTupla=tuple(miLista)
#print(parseToTupla)

#print("Juan" in miTupla)

#print( miTupla.count(13) )

#print( len(miTupla) ) 

'''
 Las tuplas unitarias requieren de una coma (,) al final
'''
tuplaUnitaria=("Jaime",)
#print(tuplaUnitaria)

# los parentesis son opcionales
otraTupla="Pepe", 23, 11, 2018
#print(otraTupla)

# Desempaquetado de tuplas
nombre, dia, mes, agno = otraTupla
#print(agno)
#print(mes)
#print(dia)
#print(nombre)

''' DICCIONARIOS
----------------
Estructuras de datos con asociación clave valor que, además de literales,
también permiten almacenar listos e incluso otros diccionarios.

Los elementos almacenados no están ordenados.
El orden es indiferente a la hora de almacenar información en un diccionario
'''

miDicc = {"Alemania" : "Berlín", "Francia" : "París", "España" : "Madrid"}
#print(miDicc["Francia"])
#print(miDicc)

miDicc["Italia"]="Lisboa"
print(miDicc)
miDicc["Italia"]="Roma" # Dentro de un diccionario nunca habrá 2 claves iguales
print(miDicc)

del miDicc["Alemania"]
#print(miDicc)

otroDicc = {"Alemania": "Berlín", 23 : "Jordan", "Mosqueteros" : 3}
#print(otroDicc)

tuplaClaves = ["España", "Portugal", "Reino Unido"]
diccionarioTupla = {tuplaClaves[0]:"Madrid", tuplaClaves[1]:"Lisboa", tuplaClaves[2]:"Londres"}

JordanDicc = {
	23: "Jordan",
	"Nombre": "Michael",
	"Equipo": "Chicago Bulls",
	"Anillos": [1991,1992,1993,1996,1997,1998]
}
#print(JordanDicc)
#print(JordanDicc["Equipo"])
#print(JordanDicc["Anillos"])

#JordanDicc["Anillos"] = {"temporadas":[91,92,93,96,97,98]}
#print(JordanDicc)

print( JordanDicc.keys() )
print( JordanDicc.values() )
print( len(JordanDicc) )
