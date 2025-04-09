
# 📦 Mi Proyecto Backend

Este es un backend construido con Node.js y Express, con conexión a MongoDB. Maneja autenticación, rutas protegidas, y operaciones básicas de una API REST.

## 🚀 Tecnologías usadas

- Node.js
- Express
- MongoDB con Mongoose
- JSON Web Tokens (JWT)
- Dotenv

## 📁 Estructura del proyecto

```
src/
│
├── controllers/   # Lógica de cada recurso
├── routes/        # Rutas de la API
├── models/        # Esquemas de Mongoose
├── middlewares/   # Middlewares personalizados (auth, errores)
└── server.js      # Punto de entrada
```

## 🔧 Instalación

1. Cloná el repositorio:

```bash
git clone https://github.com/LuksDev182/mi-proyecto-backend.git
cd mi-proyecto-backend
```

2. Instalá las dependencias:

```bash
npm install
```

3. Configurá las variables de entorno:

Crea un archivo `.env` en la raíz con el siguiente contenido:

```env
PORT=3000
MONGODB_URI=tu_uri_mongodb
JWT_SECRET=clave_secreta
```

4. Iniciá el servidor:

```bash
npm start
```

## 🛡️ Autenticación

Este proyecto incluye rutas protegidas con JWT. Al iniciar sesión correctamente, el servidor devuelve un token que debe enviarse en los headers para acceder a rutas privadas.

## 🧪 Tests

*(Opcional: si tenés test, lo agregamos acá.)*

## 📄 Licencia

MIT
