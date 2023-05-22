# API de Cursos

Esta es una API simple para administrar cursos.

## Requisitos

- Node.js
- Express
- Joi

## Instalación

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias ejecutando el comando `npm install`.

## Uso

1. Inicia el servidor ejecutando el comando `node app.js`.
2. Accede a la API a través de `http://localhost:3000`.

## Endpoints

- `GET /api/courses`: Obtiene todos los cursos disponibles.
- `GET /api/courses/:id`: Obtiene un curso específico por su ID.
- `POST /api/courses`: Agrega un nuevo curso.
- `PUT /api/courses/:id`: Actualiza un curso existente.
- `DELETE /api/courses/:id`: Elimina un curso existente.

## Estructura del Curso

Cada curso tiene la siguiente estructura:

```json
{
  "id": 1,
  "name": "course1"
}

Validación
La API utiliza Joi para validar los datos de entrada. El nombre del curso debe tener al menos 3 caracteres y es obligatorio.

Contribución
Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar tus pull requests.

Autor
Guillermo Barajas Arias