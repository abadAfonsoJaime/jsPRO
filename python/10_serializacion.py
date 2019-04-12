import pickle
'''
Guardar diccionarios u objetos en un fichero externo 
en binario codificado (sucesión de bytes)
Mucho más eficiente para la distribución a traves de la www

Biblioteca Pickle
	dump() --> volcado de datos al fichero binario externo
	load() --> carga de los datos del fichero binario externo
'''

'''
lista_nombres = ["Ana", "Jaime", "Sonsoles", "Lucho"]
fichero_binario = open("lista_nombres", "wb") # Modo escritura binaria
pickle.dump(lista_nombres, fichero_binario)
fichero_binario.close()
del (fichero_binario) # borrar el fichero de la memoria
'''

fichero = open("lista_nombres", "rb") # Modo lectura binaria
lista = pickle.load(fichero)
print(lista)