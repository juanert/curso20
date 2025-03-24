import time
#Importar regex
import re

#Comentario de una sola linea
'''
  Comentario de
  varias lineas
'''

# Variables
numero = 10
nombre = "Juan"
numero_decimal = 10.5
verdadero = True
falso = False
lista = [1,2,3,4,5]
tupla = (1,2,3,4,5)
diccionario = {
  "nombre": "Juan",
  "apellido": "Perez"
}
nulo = None

# Imprimir
print(numero)

# Concatenar
print("Hola " + nombre)

# Interpolacion
print(f"Hola {nombre}")

#print("1" + 1) # Error

# Conversion de tipos
print(int("1") + 1)
print(str(1) + "1")

# Operadores de asignacion
numero = 10
numero += 1 # numero = numero + 1
numero -= 1
numero *= 1
numero /= 1
numero %= 1
numero **= 1
numero //= 1

# Operadores de comparacion
# Igualdad: ==
print(10 == 10) # True
# Diferencia: !=
print(10 != 10) # False
# Mayor que: >
print(10 > 10) # False
# Menor que: <
print(10 < 10) # False
# Mayor o igual que: >=
print(10 >= 10) # True
# Menor o igual que: <=
print(10 <= 10) # True

# Operadores logicos
# and
print(True and True) # True

# or
print(True or False) # True

# not
print(not True) # False

#ejercicio
print( not((10 == 10) and (10 != 10)) )

# Input

nombre = input("Ingresa tu nombre: ")

#Condicionales
if nombre == "Juan":
  print("Hola \nJuan")
elif nombre == "Pedro":
  print("Hola Pedro")
else:
  print("Hola desconocido")

#Operador ternario
print("Hola Juan" if nombre == "Juan" else "Hola desconocido")

#Match case
dia = "Lunes"
match dia:
  case "Lunes":
    print("Hoy es Lunes")
  case "Martes":
    print("Hoy es Martes")
  case "Miercoles":
    print("Hoy es Miercoles")
  case "Jueves":
    print("Hoy es Jueves")
  case "Viernes":
    print("Hoy es Viernes")
  case "Sabado":
    print("Hoy es Sabado")
  case "Domingo":
    print("Hoy es Domingo")
  case _:
    print("No es un dia valido")

"""
  Realiza:
  1) - Un programa donde puedas jugar piedra, papel o tijera contra la computadora y ver cuantas partidas
  ganaste, perdiste o empataste y despues preguntar si quieres volver a jugar.

  2) - Un programa que genere un numero aleatorio entre 1 y 100 y te de 5 oportunidades para adivinarlo,
  si adivinas en menos de 5 oportunidades imprime "Felicidades ganaste" de lo contrario "Perdiste"

  Fecha de entrega: 05/02/2025
"""

#Funciones
def saludar():
  print("Hola")

saludar()

#Funciones con parametros
def saludar_a(nombre = "desconocido"):
  print(f"Hola {nombre}")

saludar_a()

#Funciones con retorno
def sumar(a, b):
  return a + b

resultado = sumar(10, 5)

#Funciones recursivas

def factorial(n):
  if n == 0:
    return 1
  print(n)
  return n * factorial(n - 1)

print(factorial(5))
#5 * 4 * 3 * 2 * 1

#Metodos de strings
nombre = "Juan Perez"

#upper
# Convierte el string a mayusculas
print(nombre.upper())

#lower
# Convierte el string a minusculas
print(nombre.lower())

#capitalize
# Convierte la primera letra del string a mayuscula
print(nombre.capitalize())

#count
# Cuenta cuantas veces se repite un caracter en el string
print(nombre.count("e"))

#find
# Busca un caracter en el string y devuelve la posicion
print(nombre.find("P"))

#replace
# Reemplaza un caracter por otro
print(nombre.replace("Juan", "Pedro"))

#split
# Divide el string en una lista
print(nombre.split(" "))
#["Juan", "Perez"]

#join
# Une los elementos de una lista en un string
print(" ".join(["Juan", "Perez"]))
#Juan Perez

#strip
# Elimina los espacios en blanco al inicio y al final del string
print("    Hola    ".strip())

#lstrip
# Elimina los espacios en blanco al inicio del string
print("    Hola    ".lstrip())

#rstrip
# Elimina los espacios en blanco al final del string
print("    Hola    ".rstrip())

#Metodos de listas
lista = [1,2,3,4,5]

#append
# Agrega un elemento al final de la lista
lista.append(6)

#extend
# Agrega los elementos de una lista a otra lista
lista.extend([7,8,9])

#insert
# Agrega un elemento en una posicion especifica
lista.insert(0, 0)

#remove
# Elimina un elemento de la lista
lista.remove(0)

#pop
# Elimina un elemento de la lista por su indice
lista.pop(0)

#clear
# Elimina todos los elementos de la lista
lista.clear()

#sort
# Ordena los elementos de la lista
lista = [5,3,1,4,2]
lista.sort()

#reverse
# Invierte los elementos de la lista
lista.reverse()

#copy
# Copia los elementos de una lista a otra lista
lista2 = lista.copy()

#Metodos de diccionarios
diccionario = {
  "nombre": "Juan",
  "apellido": "Perez"
}

print(diccionario["nombre"])

#keys
# Devuelve las claves del diccionario
print(diccionario.keys())

#values
# Devuelve los valores del diccionario
print(diccionario.values())

#items
# Devuelve las claves y los valores del diccionario
print(diccionario.items())

#get
# Devuelve el valor de una clave
print(diccionario.get("nombre"))

#setdefault
# Devuelve el valor de una clave, si no existe la crea
print(diccionario.setdefault("nombre", "Pedro"))

#pop
# Elimina un elemento del diccionario por su clave
diccionario.pop("nombre")

#clear
# Elimina todos los elementos del diccionario
diccionario.clear()

#copy
# Copia los elementos de un diccionario a otro diccionario
diccionario2 = diccionario.copy()

#Metodos de tuplas
tupla = (1,2,3,4,5)

#count
# Cuenta cuantas veces se repite un elemento en la tupla
print(tupla.count(1))

#index
# Devuelve la posicion de un elemento en la tupla
print(tupla.index(1))

#Loops
letras = ["a", "b", "c", "d", "e"]
#For
for letra in letras:
  print(letra)

#While
i = 0
while i < 5:
  print(letras[i])
  i += 1

#Range
for i in range(5):
  print(i)

#Funciones de tiempo

#time
# Devuelve el tiempo en segundos
print(time.time())

#sleep
# Pausa la ejecucion del programa
time.sleep(2)

#ctime
# Devuelve la fecha y hora actual
print(time.ctime())

#strftime
# Formatea la fecha y hora
print(time.strftime("%d/%m/%Y"))

"""
  Crea un programa que sea un sistema de inventario de una tienda, el programa debe tener las siguientes opciones:
  1) - Agregar un producto
  2) - Eliminar un producto
  3) - Ver todos los productos

  El programa debe tener un arreglo de productos y cada producto debe tener los siguientes atributos:
  - Nombre
  - Precio
  - Cantidad

  Una vez que se agregue un producto se debe mostrar un mensaje de "Producto agregado correctamente"
  y debe de haber una espera de 3 segundos antes borrar toddos los mensajes de la terminal
  y mostrar el menu nuevamente.

  Debes de utilizar funciones, loops y condicionales o metodos de listas y diccionarios.

  Fecha de entrega: 06/02/25
"""

#Clases
class Persona:
  def __init__(self, nombre, apellido):
    self.nombre = nombre
    self.apellido = apellido

  def saludar(self):
    print(f"Hola {self.nombre} {self.apellido}")

juan = Persona("Juan", "Perez")
juan.saludar()

#Herencia
class Empleado(Persona):
  def __init__(self, nombre, apellido, salario):
    try:
      super().__init__(nombre, apellido)
      self.salario = salario
    except:
      print("Ocurrio un error --> ")

  def mostrar_salario(self):
    print(f"Salario: {self.salario}")

try:
  empleado = Empleado("Pedro", "Gomez")
  empleado.saludar()
  empleado.mostrar_salario()
except:
  print("Ocurrio un error")

#Validar un correo
correo = "hola@gmail.com"
patron = "[a-zA-Z0-9]+@[a-zA-Z]+\.(com|net|org)"
if re.match(patron, correo):
  print("Correo valido")

"""
  Crea un programa orientado a objetos que sea un sistema de tareas, el programa debe tener las siguientes opciones:
  1) - Agregar una tarea
  2) - Eliminar una tarea
  3) - Ver todas las tareas
  4) - Marcar una tarea como completada
  5) - Ver tareas completadas
  6) - Ver tareas pendientes
  7) - Modificar una tarea
  8) - Salir

  Las tareas deben de ser guardar en un archivo de texto y cada tarea debe de tener los siguientes atributos:
  - Titulo
  - Descripcion
  - Completada

  Una vez que se agregue una tarea se debe mostrar un mensaje de "Tarea agregada correctamente"

  Debes de utilizar clases, funciones, loops y condicionales o metodos de listas y diccionarios.

  Ademas debes de utilizar regex para validar la informacion y que no se permitan caracteres extraños como
  $%&/()=

  Las tareas deben ser cargadas directamente del archivo de tareas.txt
"""
