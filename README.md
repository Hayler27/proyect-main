# PROYECT-MAIN

Este repositorio de GitHub contiene una aplicación web que utiliza JavaScript y LitElement para crear una Pokédex virtual, permitiendo visualizar cartas de Pokémon y sus evoluciones, así como editar los datos de los Pokémon de manera dinámica y temporal.

## Funcionalidades

- **Visualización de Cartas Pokémon**: La aplicación muestra una lista de cartas Pokémon. Al hacer clic en una carta, se mostrarán sus evoluciones.

- **Edición de Datos de Pokémon**: Cada carta Pokémon tiene un botón de edición que permite modificar los datos en tiempo real. Estos cambios no afectan los datos originales y se guardan temporalmente. Al refrescar la página, los datos vuelven a su estado original.

- **Verificación de Cartas Repetidas**: Existe un checkbox en cada carta que indica si la carta está repetida. Al activarlo, se abrirá un modal indicando la opción de llevar la carta al punto más cercano para cambiarla.

- **Eliminar Carta Actual**: Dentro de cada carta, hay un botón que permite eliminar la carta actual, lo cual se activa al hacer clic en "Llevar al punto más cercano".

- **Validación de Formulario de Evoluciones**: El formulario en la pantalla de evoluciones solo permite guardar cambios si se llenan todos los campos requeridos, esto con el fin de hacerlo mas dinamico y diferente al formulario de las cartas de la pantalla principal.

## Comandos para Ejecutar la Aplicación

Antes de ejecutar la aplicación, asegúrate de tener Node.js instalado en tu sistema.

1. Ejecuta el comando `npm i` para instalar las dependencias necesarias.
2. Luego, ejecuta el comando `npm start` para iniciar la aplicación.

## Notas Adicionales

Esta aplicación demuestra el uso de LitElement y sus componentes para crear una interfaz dinámica y escalable. Además, el proyecto puede ser extendido y mejorado en futuras iteraciones del desarrollo.

### Normas y Convenciones en el Código

El código sigue normas y convenciones de linteo para mantener la consistencia y legibilidad. Además, se han añadido comentarios para facilitar la comprensión del mismo.
