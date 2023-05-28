---
title: 'The reason to create a version 2.0 of my web site'
subtitle: "I commited some errors when creating the first version of my web site, here I'll share what I've learned"
tags: ['Next.js', 'TypeScript', 'TailwindCSS', 'Vercel']
featuredImage: 'https://www.juancman.dev/blog/website-2.0/website-2.0-header.png'
featuredImageCaption: 'Tech Stack of this web site. Next.js, Vercel, React.js, TypeScript and TailwindCSS'
date: '2023-04-07T00:00:00'
---

The first version of my web site was one of my biggest projects so fat, but **now** as I’ve **more** **experience** as a **Frontend** Engineer, I realize I **didn’t** do **enough** **research** into **creating** a **web** site with a **blog**.

---

## Client Side Rendering (CSR) vs Server Side Rendering (SSR) vs Static Generation (SG)

When developing a **web** **application**, you should **think** **about** the type of **rendering** to use, while **considering** the **requirements** of the **problems** you want to **solve**.

### Client Side Rendering (CSR)

For example, a web **application** like a **SaaS** to create tasks and manage people will have **dynamic** **pages** to show the tasks, update the cards when is edited or deleted, show notifications, etc. In this situation, a **CSR** would be **better**, to **render** the page **each** time the user **request** access will **keep** the data **updated**. However, a **CSR** needs to **hydrate** the page when is **requested**, this causes a **slow** **first** **load**, and uses **more** **resources** of the user’s PC.

### Server Side Rendering (SSR)

This could be solved using **SSR**, this consist in **generate** the page in the **Server** where the web app is hosted **using** all the **power** that a **server** can provide. The problem is that a **server** is **required**, Google Cloud provides with serverless options like App Engine or Cloud Run, but you’ll need to learn about this services and how to deploy the project, so the **technical** **knowledge** is **high**.

The **disadvantage** of **CSG** and **SSR** is that because **each** **page** **must** be **rendered** on each **request**, **web** **crawlers** and **search** **engines** such as Google's will take **longer** to **obtain** **information** about your page, resulting in a **low** **SEO** priority.

### Static Generation (SG)

Well, if a **page** **doesn’t** require **fetch** **data** for **each** **request**, then you could use **SG**, this means that the **page** is **generated** when you **build** the **production** directory **before** you **deploy** it. The page will be generated into a HTML/CSS/JS one time, and if you need to **update** the **data** in that page you’ll need to do the **changes** and **deploy** the project. Yes, you’ll need to be more cautious when reviewing the changes before deploying, but as the page is already generated, **web** **crawlers** and the Google’s **search** **engine** will get the **info** in your page **faster**, **improving** your **SEO**.

## The cool thing about Next.js

In the **past** you will require to **think** if go **full** CSR, SSR or SG, linking your web to their respecting sections, like the app, blog, etc.

**[Next.js](https://nextjs.org/)** is a **Node.js** **meta-framework** that uses **[React.js](https://react.dev/)** to build the UI, and provides with CSR, SSR, SG and more, so you can generate SG fetching async data, allowing you to don’t **need** to **create** **every** **static** **page**.

Is that the **approach** **used** for **this** **web** site, **instead** of **fetch** the data on **each** **request**, I only **fetch** data **when** I **create** the **build** of the project.

**Each** **article** is a SG page, but I use a **template** to keep every blog similar, using **markdown** syntax for the content of the blog, and with an **extension** of **TailwindCSS** I keep the styles consistent.

So, **Next.js** allows you to **choose** the **rendering** method for **each** **page** in your web, this feature permits to create amazing web sites in the same project, keeping consistence and with fast load times, Next.js even lazy loads each page and start loading when you hover a link like Home, Contact, etc.

> I’ll explain in more detail the architecture of this project in the future!

## TailwindCSS vs MUI

I choose to use **[TailwindCSS](https://tailwindcss.com/)** to learn about this CSS library, and I’m impressed the **faster** that makes the development of the styles of a web project. **MUI** **provides** **functionalities**, but sometimes **gives** **problems** with **hydration** like in my previous web site, when you **first** **load** the page it takes a **time** to **show** all the **styles**, now it no longer occurs because TailwindCSS is pure CSS and the pages are static.

## Deploying on Vercel

**[Vercel](https://vercel.com)** is the company behind Next.js, and they provides with **hosting** services **optimized** for **Node.js** apps, and as I’m learning about Cloud Development maybe I could try to host this web like my previous web into a Cloud Service like Cloud Run, but this time I choose to use **Vercel** to get the **analytics** that are very useful, and as the **hobby plan** gives me free hosting for small projects.

To deploy I use the **[Vercel CLI](https://vercel.com/docs/cli)**, pretty simple and straightforward.

## More content coming soon!

I’ll keep updating with posts, features and more content to share my experience, and know I’m writing this paragraph, I think the next feature it would be a newsletter to notify people when I create a new post. Time to work!
