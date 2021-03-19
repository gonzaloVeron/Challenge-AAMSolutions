# Challenge-AAMSolutions

# Descripcion

La aplicacion se desarrollo utilizando typescript, angular, express y mongodb.
Se separo en servidores diferentes para el backend y frontend.

# Preparando el entorno

Primero necesitamos instalar mongodb desde el siguiente enlace: https://www.mongodb.com/try/download/community .
Luego nos dirigimos a la carpeta "server" y dentro de ella a la carpeta app/build y dentro de un terminal ejecutamos
el siguiente comando:
```
node index.js
```

Una vez tengamos el backend levantados procedemos a levantar el frontend que se encuentra en la carpeta client.
Para poder levantar el front hay que instalar todas las dependencias de la aplicacion.
dentro de la carpeta client ejecutamos los siguientes comandos:

```
npm install
npm install -g @angular/cli
```

Una vez instalado todo, dentro de la misma carpeta ejecutamos el siguiente comando para levantar el servidor:
```
ng serve
```