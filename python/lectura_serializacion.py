import pickle

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
		return "Marca: " + self.marca + "\nModelo: " + self.modelo + "\nEn Marcha: " + str(self.enMarcha) + "\nAcelerando: " + str(self.acelera) + "\nFrenando: " + str(self.frena) + "\n"
		
openFile = open("losCoches", "rb")
cars = pickle.load(openFile)
openFile.close()
for c in cars:
	print( c.estado() )