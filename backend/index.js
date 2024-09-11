const express = require('express');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(cors()); // Para permitir peticiones desde el front-end
app.use(express.json()); // Para manejar datos en formato JSON

// Ruta simple para probar el servidor
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
