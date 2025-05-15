const os = require('node:os');

console.log("Informacion del sistema operativo: ");
console.log("-------------------------------------");
console.log("Nombre del sistema operativo: " + os.release());
console.log("Version del sistema operativo: " + os.version());
console.log("release: " + os.release());
console.log("Nombre del host: " + os.hostname());
console.log("Sistema operativo: " + os.type());
console.log("Plataforma: " + os.platform());
console.log("memoria total: " + os.totalmem() / 1024 / 1024 + " MB");
console.log("memoria libre: " + os.freemem() / 1024 / 1024 + " MB");
console.log("memoria usada: " + (os.totalmem() - os.freemem()) / 1024 / 1024 + " MB");
console.log("Arquitectura: " + os.arch());
console.log("Numero de procesadores: " + os.cpus().length);
console.log("CPU: " + os.cpus()[0].model);
console.log("Velocidad de la CPU: " + os.cpus()[0].speed + " MHz");
console.log("Tiempo de actividad: " + Math.round(os.uptime() / 60 /60 /24) + " dias");
console.log("Directorio de inicio: " + os.homedir());