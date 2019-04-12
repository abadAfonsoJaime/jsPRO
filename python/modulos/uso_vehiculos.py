from modulo_vehiculos import *

miCoche = Vehiculo("Mazda", "MX5")
miCoche.estado()

'''
Si no se encuentra el módulo a importar en el mismo directorio en el que se le llama,
Python busca por defecto en el syspath
un conjunto de directorios entre los que están los archivos de instalción y otros

Para crear un paquete debemos crear una carpeta con un archivo __init__.py
De manera que Python interpretará al directorio en el que se uncuentra el
archivo __init__.py como un paquete

También se pueden crear subpaquetes cada uno de los directorios con el __init__.py
'''
