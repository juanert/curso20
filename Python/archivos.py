import os
#Manejo de archivos
"""
  w = write
  r = read
  a = append
  x = create
"""
# Abre un archivo en modo de escritura y si no existe lo crea (write)
f = open("archivo.txt", "w")
f.write("Hola mundo")
f.close()

# Abre un archivo en modo de lectura (read)
f = open("archivo.txt", "r")
print(f.read())
f.close()

# Abre un archivo en modo de escritura y si no existe lo crea (append)
f = open("archivo.txt", "a")
f.write("\nAdios mundo")
f.close()

# Abre un archivo en modo de escritura y si no existe lo crea (create)
try:
  f = open("archivo2.txt", "x")
  f.write("Hola mundo")
  f.close()
except:
  print("El archivo ya existe")

# Elimina un archivo
os.remove("archivo2.txt")

# Abre un archivo y lee cada linea
archivo = open("archivo.txt", "r")
for linea in archivo:
  print("linea: " + linea)
archivo.close()

