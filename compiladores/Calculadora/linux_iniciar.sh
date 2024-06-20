#!/bin/bash

# Ruta del archivo Java
ruta_archivo="./Calculadora/Calculadora.java"

# Compilar el archivo Java
echo "Compilando el archivo Java..."
compilacion=$(javac $ruta_archivo 2>&1)

# Verificar si la compilación fue exitosa
if [ $? -eq 0 ]; then
  echo "Compilación exitosa."
  # Ejecutar la clase compilada
  echo "Ejecutando la clase Calculadora..."
  java -cp . Calculadora &
  echo "La clase Calculadora se está ejecutando en segundo plano."
else
  echo "Error durante la compilación:"
  echo "$compilacion"
fi

