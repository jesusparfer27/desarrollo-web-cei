# Backend

## Express.js

Es un framework para NodeJs para crear Webs y APIs. Es simple y flexible.

## Ventajas:
- Rápido y minimalista
- Fácil de aprender y usar
- Tiene una gran comunidad y muchos recursos disponibles
- Altamente erxtensible con `Middlewares`

# Configuración inicial

Instalación con npm / Pnpm
```bash
    npm init -y
    npm i express
    npm i nodemon -D
```

Instalación con Bun
```bash
    bun init
    bun i express
    bun i -d nodemon
    bun i --dev nodemon
```

# Rutas y métodos HTTP

Las rutas son las URL que el servidor puede manejar. Por ejemplo "/usuarios" para obtener lista de usuarios, o "/usuarios/133" para un usuario específico.
Los métodos HTTP son las acciones que se pueden realizar en una ruta. Las mas comunes son GET, POST, PUT, y DELETE
    GET: Obtener info.
    POST: Envía info (crear).
    PUT:  Actualiza info.
    DELETE: elimina info.