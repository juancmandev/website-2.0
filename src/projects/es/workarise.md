---
title: 'Workarise'
subtitle: 'Workarise Web App, administra tareas con tu equipo'
tags: ['React.js', 'Vite.js', 'MUI', 'Firebase', 'GCP', 'Node.js']
featuredImage: '/projects/workarise-banner.png'
featuredImageCaption: 'Workarise Banner'
date: '2023-04-14T00:00:00'
url: 'https://workarise.com'
---

## Descripción General

[Workarise](https://workarise.com) es un Software como Servicio para administrar equipos mediante task cards asignadas a personas, establece una fecha de inicio y final, agregar archivos, etc.

Puedes usar el Calendario para ver las fechas de entrega de las tareas y agendar eventos de Google Meet autorizando el uso de tu Google Calendar. Puedes editar y borrar eventos los cuales se sincronizan con tu Google Calendar y el de los invitados. El Gantt te provee con una línea del tiempo para ver la duración de las tareas.

La web app está desarrollada con [React.js](https://react.dev/), usando [Vite.js](https://vitejs.dev/) para correr el entorno de desarrollo. Para funcionalidades como modals y popovers usamos [MUI](https://mui.com/). Para manejar el estado de los componentes usamos useContext.

Para crear eventos Google Meet y sincronizar el calendario hemos desarrollado una pequeña API con Node.js para usar la API de Google OAuth 2, ya que necesitamos pedir permiso para acceder al Google Calendar del user.

Actualmente, Workarise está en su primera versión, usando [Firebase](https://firebase.google.com/) para autenticar a los users, guardar datos y archivos. Firebase utiliza [Firestore](https://firebase.google.com/docs/firestore), una Base de Datos NoSQL, sin embargo estamos desarrollando una API con [Django](https://www.djangoproject.com/) corriendo en [Cloud Run](https://cloud.google.com/run)) conectado a [Cloud SQL](https://cloud.google.com/sql) a una instancia MySQL, ya que usaremos una Base de Datos SQL en el futuro. Actualmente la web app y la landing están desplegadas en Firebase Hosting, pero moveremos la landing a Vercel, y será actualizada a Next.js in el futuro para optimizar el SEO y publicar blog posts.

## Mi impacto en Workarise

Actualmente, estamos desarrollando un MVP, y todos estamos a tiempo parcial en este proyecto. Me uní en Diciembre, pero antes no había un producto que los users pudieran usar, y como era el único Ingeniero Frontend en ese momento tomé toda la responsabilidad de entregar algo que pudiera considerarse un MVP.

Me tomó alrededor de 3 meses para conseguir eso, actualicé algunas de las dependencias del proyecto para mejorar el flujo de desarrollo, y sugerí usar Firebase como Backend y Hosting.

Gracias a todo esto obtuvimos nuestros primeros users y feedback, así que ahora estamos trabajando con ese feedback para mantener mejorando nuestra app, ¡a nuestros users les gusta el diseño y la simplicidad!

Ahora mismo hay 3 engineers en el equipo, 2 en el front (incluyéndome) y 1 en el back, pero estoy ayudando a nuestra Backend Engineer para desplegar en GCP a producción la API y Base de Datos, y estoy guiando al nuevo Frontend Engineer para entregar nuevos features, él ha desarrollado el responsive design y algunos features que complementan las task cards.

Estoy feliz de poner a prueba mis habilidades en este proyecto, no es fácil tomar más responsabilidad con menos de 2 años de experiencia laboral, y me ha ayudado a crecer mucho en estos meses.

Incluso si el mercado no considera mis años como senior, creo que eso no importa tanto, lo único que importa es que puedas entender por qué usas código, para crear soluciones y alcanzar a las personas a través de sus computadoras.
