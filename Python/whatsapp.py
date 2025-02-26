#import pywhatkit
import pywhatkit as kit
import datetime
import time

numbers = [
  {
    "nombre": "Francielys",
    "numero": "+584140750219"
  },
  {
    "nombre": "Willian",
    "numero": "+584128828492"
  }
]

"""
Send a message to a group
kit.sendwhatmsg_to_group("LriuCUvfU6k4DLiHNtPJJT", "Este mensaje es un mensaje automatizado", now.hour, now.minute + 1, 20, True)
print("Mensaje enviado")
"""

for number in numbers:
  now = datetime.datetime.now()
  if(now.minute + 1 == 60):
      now.hour += 1
      now.minute = 0
  kit.sendwhatmsg(number["numero"], f"Hola {number['nombre']} este mensaje es automatizado", now.hour, now.minute + 1, 15, True)
  print("Mensaje enviado a " + number["nombre"])
  time.sleep(60)

print("Todos los mensajes han sido enviados")