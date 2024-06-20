@echo off

cd CompiladoresCalculadora\Calculadora

setlocal EnableDelayedExpansion

echo Compilando el archivo Java...
javac Calculadora.java 2>&1 | findstr /i error
if %errorlevel% neq 0 (
  echo Error durante la compilación:
  javac Calculadora.java 2>&1
  pause
  goto fin
)

echo Compilación exitosa.
echo Ejecutando la clase Calculadora...
start "" java -cp . Calculadora
echo La clase Calculadora se está ejecutando en segundo plano.

:fin

