from io import open
'''
Junto con las BBDD es la otra alternativa para garantizar la persistencia de los datos.
El manejo de archivos externos consta de 4 fases:
	Creación
	Apertura
	Manipulación
	Cierre

https://docs.python.org/3/library/index.html
https://docs.python.org/3/library/io.html

'''
archivo_texto = open("archivo.txt", "w") # Creación y apertura en modo escritura
frase = "Escribiendo en un .txt con código Python"
archivo_texto.write(frase) # Manipulación
archivo_texto.close() # Cierre
# ctl + b

archivo_existente = open("archivo.txt", "r") # modo lectura
texto = archivo_existente.read()
archivo_existente.close()
print(texto)
# ctl + b

add_text = open("archivo.txt", "a") # Modo append
add_text.write("\n nueva línea en el archivo")
add_text.close()
# ctl + b


#El método readlines() lee linea a linea para luego almacenarlo en una lista
sameFile = open("archivo.txt", "r")
lineas_texto = sameFile.readlines()
sameFile.close()
print(lineas_texto)
print(lineas_texto[0])
print(lineas_texto[1])
# ctl + b


read_write = open("archivo.txt", "r+") # modo lectura y escritura
read_write.write("Comienzo del documento\n")

listaTexto = read_write.readlines()
listaTexto[1] = "     Esta línea ha sido incluida desde el exterior \n"
read_write.writelines(listaTexto)
read_write.close()
# ctl + b
# abrir el archivo con el bloc de notas