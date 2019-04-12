from io import open

archivo_texto = open("archivo.txt", "r") # Modo lectura
# El puntero está al principio del archivo

print( archivo_texto.read() )
# El puntero se sitúa al final
print( archivo_texto.read() )
# No lo va a leer porque el puntero está al final

archivo_texto.seek(0) # El puntero se sitúa al principio del archivo
print( archivo_texto.read() )

archivo_texto.seek(11) # Empieza en el caracter 11
print( archivo_texto.read() )

archivo_texto.seek(0)
print( archivo_texto.read(2) ) # Lee dos caracteres

# Lee la segunda mitad de caracteres del texto
archivo_texto.seek(
	len( archivo_texto.read() ) / 2
)
print( archivo_texto.read() )