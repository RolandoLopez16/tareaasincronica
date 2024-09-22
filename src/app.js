const fs = require('fs').promises;
const path = require('path');

// Ruta al archivo que se va a leer
const filePath = path.join(__dirname, '../input.txt');

const readFileAsync = () => {
    fs.readFile(filePath, 'utf8')
        .then((data) => {
            console.log('Contenido del archivo:');
            console.log(data);
        })
        .catch((err) => {
            console.error('Error al leer el archivo:', err);
        });
};

// Llamar a la función para leer el archivo
readFileAsync();
