class Vehiculo():

	def __init__(self, marca, modelo):
		self.marca 		= marca
		self.modelo 	= modelo
		self.enMarcha 	= False
		self.acelera 	= False
		self.frena 		= False

	def arrancar(self):
		self.enMarcha = True

	def acelerar(self):
		self.acelera = True

	def frenar(self):
		self.frena = True

	def estado(self):
		print(
			"Marca; ", self.marca,
			"\nModelo: ", self.modelo,
			"\nEn Marcha: ", self.enMarcha,
			"\nAcelerando: ", self.acelera,
			"\nFrenando: ", self.frena
		)

# --------- HERENCIA --------- #
"""
class ClassName(object):
	docstring for ClassName
	def __init__(self, arg):
		super(ClassName, self).__init__()
		self.arg = arg
"""
class Furgoneta(Vehiculo):
	
	def cargar(self, carga):
		self.cargado = carga
		if self.cargado:
			return "La furgoneta está cargada"
		else:
			return "La furgoneta no está cargada"

class Moto(Vehiculo):
	hCaballito = ""
	def caballito(self):
		self.hCaballito = "Voy haciendo el caballito"

	def estado(self):
		super().estado()
		print(self.hCaballito, "\n")


# ---------------------------------------------------- #
miMoto = Moto("Honda", "CBR")
miMoto.caballito()
miMoto.estado()

miFurgo = Furgoneta("Reanult", "Kangoo")
miFurgo.arrancar()
miFurgo.estado()
print( miFurgo.cargar(True), "\n" )

class V_Electricos(Vehiculo):
	
	def __init__(self, marca, modelo, autonomia):
		super().__init__(marca, modelo)
		self.autonomia = autonomia
		self.cargando = False

	def cargarEnergia(self):
		self.cargando = True

	def descripcion(self):
		super().estado()
		print(
			"Autonomía: ", self.autonomia,
			"\nCargando: ", self.cargando
		)

# --------- HERENCIA MÚLTIPLE --------- #
class Bici_Electrica(V_Electricos, Vehiculo): # Se da preferencia a la primera Clase del paréntesis
	pass


myBike = Bici_Electrica("Orbea", "EP200", 100) # Su constructor es el de V_Electricos
# myBike.cargarEnergia()
myBike.descripcion()