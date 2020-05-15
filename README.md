# **Talent Fest Laboratoria 2020**

## Table of Contents
* [1. Problemática](#1-problemática)
* [2. Tecnologías utilizadas](#2-tecnologías-utilizadas)
* [3. Planeación](#3-planeación)
* [4. Historias de usuario](#4-historias-de-usuario)
* [5. Prototipos](#5-prototipos)
* [6. Producto final](#6-producto-final)
* [7. Autores](#7-Autores)

## 1. Problemática

<img src = "https://github.com/majoaquino99/TalentFest2020/blob/majo/src/assets/images/logo-4040apps.png" width = "60%">
<br>

Partimos de la problematica que nos presentó 4040apps, ellos utilizan una herrramienta para administración de tiempos, que en este momento no es muy accesible. Dicha inaccesibilidad deriva en algunas problematicas como que frecuentemente
haya una discrepancia entre las horas marcadas y las horas que realmente han trabajado. Nosotras consideramos que teniendo una interfaz más accesible, o más presente, sería una solución a esta problemática, permitiendo a los miembros del staff tengan mayor certeza en el registro de datos con un proceso más directo.


## 2. Las tecnologías que utilizamos: 

Decidimos trabajar con React porque consideramos que esta herramienta nos permitió tener una división de trabajo más eficiente y agilizó el trabajo asíncrono.

En este proyecto, una de las cosas que nos pareció más retadora fue el requerimento de nuestro cliente que la herramienta se desenvolviera como aplicación de escritorio. Por lo tanto, después de una investigación extensa optamos por utilizar Electron. Sentimos que si bien es cierto que es una tecnología que nunca habíamos utilizado, nos presentó una gran oportunidad de aprendizaje.

## 3. Planeación

Utilizamos trello a modo de tablero Kanban para división de tareas.
<br>

Asi mismo, nos mantuvimos en constante comunicación entre el equipo, en llamadas de zoom, mensajes vía slack y whatsapp.
<br>

Definimos seis historias de usuario. Planeamos trabajar una historia a la vez, cumpliendo con sus debidos criterios de aceptación. Para tener un proyecto funcional al final de cada historia.
<br>

De igual modo, trabajamos en base a un functional design document/pseudocódigo que desarrollamos para poder tener más claro el comportamiento de nuestra interfaz y así tener un panorama más concreto de la división de trabajo.
<br>

<img src = "https://github.com/majoaquino99/TalentFest2020/blob/majo/src/assets/images/FDDhome.png" width = "50%">
<img src = "https://github.com/majoaquino99/TalentFest2020/blob/majo/src/assets/images/FDDviewtasks.png" width = "50%">
<img src = "https://github.com/majoaquino99/TalentFest2020/blob/majo/src/assets/images/FDDtaskcard.png" width = "50%">


## 4. Historias de Usuario

**Historia  de Usuario #1**
Yo como usuario, quiero poder visualizar las tareas que tengo asignadas por proyecto.

*Criterios de Aceptación.*
- El usuario puede logguearse a Cubos
- El usuario puede visualizar sus tareas asignadas.
- Tablas establecidas para registro de tiempo. 


**Historia de Usuario #2**
Yo como usuario, quiero poder visualizar las tareas catalogadas por proyecto, y así activar o detener el temporizador de la tarea en la que estoy trabajando.

*Criterios de Aceptación*
- El usuario puede visualizar las tareas separadas por proyecto.
- Cada tarea tendrá un botón para iniciar o pausar.
- Solo se podrá tener activado el temporizador de uno y solo uno a la vez.


**Historia de Usuario #3**
Yo como usuario, quiero poder administrar el status de mis tareas.

*Criterios de Aceptación.*
- En menú drop down de status se visualiza en el UI para cada tarea.
- Los status se actualizan junto con todo el sistema
- Cuando el estatus se encuentre como: Completo, Revisión, Detenido por cliente o Pruebas, ya no se mostrará en la lista de tareas.

**Historia de Usuario #4**
Yo como usuario, quiero poder visualizar gráficamente el tiempo invertido en mis tareas asignadas.

*Criterios de Aceptación:*
- La interfaz cuenta con un área donde se muestra una gráfica circular.
- La gráfica muestra el porcentaje de tiempo que tardó el usuario en cada tarea.
- Cada 24hrs se envía un reporte del tiempo registrado por usuariio al encargado del proyecto.

**Historia de Usuario #5**
Yo como usuario, quiero poder visualizar gráficamente un resúmen de mi proyecto. Además, tengo acceso a esta herramienta como una aplicación de escritorio.

*Criterios de Aceptación.*
- Crear un área para mostrar los tiempos del proyecto con total de tareas, tiempo total registrado, gráfica, y nombre de los usuarios que estén asignados al proyecto y la sumatoria total del tiempo registrado en tareas de este proyecto.
- Hacer una gráfica general por proyecto y mostrará el porcentaje de tiempo que trabajó cada usuario vinculado.
- El sistema funciona como una aplicación de escritorio.

**Historia de Usuario #6**
El usuario recibirá una notificación de inactividad cada 20 min, así como cada que entre a las plataformas de twitter, instagram, o facebook.

*Criterios de Aceptación*
- Cada 20 minutos de inactividad, arroja una notificación para preguntar si continúas activo trabajando en “nombre_de_tarea”, la notificación se muestra delante de la pantalla del usuario sin importar qué se encuentre haciendo
- Cuando entra a alguna plataforma, facebook, instagram o twitter, arroja una notificación para preguntar si continúas activo trabajando en “nombre_de_tarea”



## 5. Prototipo

<img src = "https://github.com/majoaquino99/TalentFest2020/blob/majo/src/assets/images/prototype-login.png" width = "50%">
<img src = "https://github.com/majoaquino99/TalentFest2020/blob/majo/src/assets/images/prototype-homeview.png" width = "50%">
<img src = "https://github.com/majoaquino99/TalentFest2020/blob/majo/src/assets/images/prototype-viewtasks.png" width = "50%">
<img src = "https://github.com/majoaquino99/TalentFest2020/blob/majo/src/assets/images/prototype-graphview.png" width = "50%">


## 6. Producto Final

## 7. Autores

* **Georgina Peréz** - [Github](https://github.com/georginapq)
* **Ary MF** - [Github](https://github.com/AryMF)
* **Ana Paula Oliva** - [Github](https://github.com/anapaulaoliva)
* **María Jose Aquino** - [Github](https://github.com/majoaquino99)
* **Giovanna PC** - [Github](https://github.com/giovsteph)





