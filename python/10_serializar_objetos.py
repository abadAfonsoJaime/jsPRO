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
		

coche1 = Vehiculo("Hyunday", "i30")
coche2 = Vehiculo("Opel", "Corsa")
coche3 = Vehiculo("Seat", "Leon")
coches = [coche1, coche2, coche3]

fichero = open("losCoches", "wb")
pickle.dump(coches, fichero)
fichero.close()
del (fichero)

ficheroApertura = open("losCoches", "rb")
misCoches = pickle.load(ficheroApertura)
ficheroApertura.close()
for c in misCoches:
	print(c.estado())