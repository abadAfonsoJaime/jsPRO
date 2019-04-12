class Coche():
	# Constructor
	def __init__(self):
		# Encapsular
		self.__largoChasis=250
		self.__anchoChasis=120
		self.__ruedas=4
		self.__enmarcha=False

	def arrancar(self, arrancamos):

		self.__enmarcha = arrancamos

		if self.__enmarcha:
			chequeo = self.__chequeo_interno()

		if self.__enmarcha and chequeo: # si no se cumple la 1ª condición, no entra a evaluar la 2ª
			return "El coche está en marcha"
		elif self.__enmarcha and chequeo == False:
			return "Algo ha ido mal en el chequeo; no podemos arrancar"
		else:
			return "El coche está parado"
	
	def estado(self):
		return "El coche tiene ", self.__ruedas, " ruedas. Un ancho de ", self.__anchoChasis, " y un largo de ", self.__largoChasis

	def __chequeo_interno(self): # Encapsulamos el método para restringirlo a uso interno
		print("realizando chequeo interno")
		self.gasolina = "ok"
		self.aceite = "mal"
		self.puertas = "cerradas"
		if self.gasolina == "ok" and self.aceite == "ok" and self.puertas == "cerradas":
			return True
		else:
			return False

miCoche = Coche()

miCoche.estado()
print( miCoche.arrancar(True) )
miCoche.estado()

print("-------------SE CREA UN SEGUNDO OBJETO COCHE-------------")
miCoche2=Coche()
print( miCoche2.arrancar(False) )
miCoche2.estado()

class Persona():

	def __init__(self, nombre, edad, lugar_residencia):
		self.nombre = nombre
		self.edad = edad
		self.lugar_residencia = lugar_residencia

	def descripcion(self):
		print(
			"Nombre: ", self.nombre,
			"\nEdad: ", self.edad,
			"\nResidencia: ", self.lugar_residencia
		)

class Empleado(Persona):
	
	def __init__(self, salario, antigüedad, nombre_empleado, edad_empleado, residencia_empleado):
		super().__init__(nombre_empleado, edad_empleado, residencia_empleado)
		self.salario = salario
		self.antigüedad = antigüedad

	def descripcion(self):
		super().descripcion()
		print(
			"Salario: ", self.salario,
			"\nAntigüedad: ", self.antigüedad
		)
	

Manuel = Empleado(1500, 15, "Manuel", 55, "Colombia")
Manuel.descripcion()

print( isinstance(Manuel, Empleado) )
print( isinstance(Manuel, Persona) ) # Principio de sustitución

Pepe = Persona("Pepe", 40, "España")
print( isinstance(Pepe, Persona) )
print( isinstance(Pepe, Empleado) ) # Principio de sustitución


# ---------------- POLIMORFISMO ---------------- #

class Coche():

	def desplazamiento(self):
		print("Me desplazo utilizando cuatro ruedas")

class Moto():

	def desplazamiento(self):
		print("Me desplazo utilizando 2 ruedas")


class Góndola():

	def desplazamiento(self):
		print("Me desplazo utilizando 8 ruedas")

print("\nPOLIMORFISMO\n")
miMoto = Moto()
miMoto.desplazamiento()

miCoche = Coche()
miCoche.desplazamiento()

miCamion = Góndola()
miCamion.desplazamiento()

print("----------------------------")
def desplazamientoVehiculo(vehiculo):
	vehiculo.desplazamiento()

miVehiculo1 = Moto()
desplazamientoVehiculo(miVehiculo1)

miVehiculo2 = Coche()
desplazamientoVehiculo(miVehiculo2)

miVehiculo3 = Góndola()
desplazamientoVehiculo(miVehiculo3)

'''
No debemos especificar el tipo del parámetro vehiculo porque Python es de tipado dinámico/débil
'''