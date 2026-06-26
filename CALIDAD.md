# Estrategia general

Implementamos una estrategia básica en la que se comprueben el aspecto de la página y el login.
Además, buscamos un código consistente, es decir que no hayan variables sin usar ni errores de sintaxis a lo largo del código pusheado

# Herramientas seleccionadas

* Vitest para pruebas unitarias. -> Porque lo recomendaste vos <3 (y por su simple implementación)
* Playwright para pruebas E2E. -> Porque permite simular la interacción del usuario dentro de la página
* ESLint para validación de calidad. -> Porque detecta inconsistencias y lo tiraste vos como indirecta 😁

# Tests desarrollados

## Tests unitarios

Desarrollamos pruebas para validar la autenticación del login.

Casos cubiertos:

* Validación de credenciales completas.
* Rechazo de campos vacíos.

## Tests E2E

Se verifica que la página cargue en un inicio.

# Casos de uso críticos

* Inicio de sesión.
* Navegación principal.
* Integración con Supabase.

# Pipeline de CI/CD

El pipeline ejecuta:

1. Instalación de dependencias.
2. Ejecución de lint.
3. Ejecución de tests unitarios.
4. Generación del build.

# Limitaciones y deuda técnica

Testeo del signup y generación efectiva de paletas.