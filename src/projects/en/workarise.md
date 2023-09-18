---
title: 'Workarise'
subtitle: 'Workarise Web App, manage tasks with your team'
tags: ['React.js', 'Vite.js', 'MUI', 'Firebase', 'GCP', 'Node.js']
featuredImage: '/projects/workarise-banner.png'
featuredImageCaption: 'Workarise Banner'
date: '2023-04-14T00:00:00'
url: 'https://workarise.com'
author: 'Juan Manzanero'
---

## Overview

[Workarise](http://workarise.com) is a Team Manager Software as a Service to create task cards assigning people, set a start and due date, add attachments files, etc.

You can use the Calendar to see the tasks' due dates and schedule Google Meet events authorizing the use of your Google Calendar. You can edit and delete events which sync with your Google Calendar and guests' Google Calendars. The Gantt provides you with a timeline to check task duration.

The web app is developed with [React.js](https://react.dev/), using [Vite.js](https://vitejs.dev/) to run the development environment. For functionality like modals, and popovers we use [MUI](https://mui.com/). To manage the state of components we’re using useContext.

To create Google Meet events and sync the calendar we'd develop a small Node.js API to use Google OAuth 2 API, as we need to prompt our users to give access to their Google Calendars.

Currently, Workarise is in the first version, using [Firebase](https://firebase.google.com/) to authenticate users and store raw data and files. Firebase uses [Firestore](https://firebase.google.com/docs/firestore), a NoSQL DB, however we’re developing an API using [Django](https://www.djangoproject.com/) running on [Cloud Run](https://cloud.google.com/run) connected to [Cloud SQL](https://cloud.google.com/sql) to a MySQL instance, as we’ll be using a SQL DB in the future. Currently the web app and landing are deployed on Firebase Hosting, but we’ll move the landing page to Vercel, and it’ll be updated to use Next.js in the future to optimize SEO and publish blog posts.

## My impact in Workarise

Currently, we’re developing an MVP, and everyone is working part-time on this project. I joined in December, but before there wasn’t a product that users can use, so as I was the only Frontend Engineer at that moment I taked full responsibility for delivering something that can be considered an MVP.

It took me like 3 months to achieve that, I updated some dependencies of the project to improve the development flow, and I suggested using Firebase as Backend and Hosting.

Thanks to all this we got our first users and feedback, so we’re working on that feedback to keep improving our app, our users like the design and simplicity!

At the moment there’re 3 engineers in the team, 2 on the front (including me) and 1 on the back, but I’m helping to our Backend Engineer to deploy on GCP to production the API and DB, and I'm guiding the new Frontend to deliver new features, he’d developed the responsive design and some features to complement the task cards.

I’m happy to test my skills in this project, it’s not easy to take more responsibility with less than 2 years of labor experience, and it’d help me to grow a lot in these months.

Even if the market doesn’t consider my years of experience as a senior, I think that doesn’t matter at all, the only thing that matters is that you can understand why you’re using code, to create solutions and reach people across their computers.
