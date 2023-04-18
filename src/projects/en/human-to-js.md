---
title: 'Human to JS'
subtitle: 'Translate human language to JavaScript code!'
tags: ['ChatGPT', 'Next.js', 'JavaScript', 'Vercel']
featuredImage: '/projects/human-to-js-banner.png'
featuredImageCaption: 'Human to JS Banner'
date: '04-16-2023'
url: 'https://human-to-js.juancman.dev/'
repo: 'https://github.com/juancmandev/human-to-js'
---

## Background

I’m always looking to grow my career by learning new technologies as well known Software Engineer; however, that could be dangerous because Software Engineer is not about using the ultimate tech stack but making things happen.

## Inspiration source

I was checking Twitter until I found a tweet where a person created a side project over a weekend. That project is [SQL Translator](https://www.sqltranslate.app/), a simple UI to put text input describing a query; then you get the query into SQL, simple!

[@whoiskatrin](https://twitter.com/whoiskatrin?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1634973237829599233%7Ctwgr%5Eb49b9d28e6ea7383ef16ea3c8c6040656ff0c944%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2Fwhoiskatrin2Fstatus2F1634973237829599233widget%3DTweet) used ChatGPT API to send a prompt typed by the user, and then show SQL response into a component to copy to the clipboard. That was enough to get the deserved attention of the community. [Tweet link](https://twitter.com/whoiskatrin/status/1634973237829599233)

## My idea

> _“Why not a web app to type a prompt to generate JavaScript code?”_

So I started to build my idea using this tech stack:

- **Next.js**: Web framework to build the UI and Next.js provides you with an API directory to communicate with ChatGPT API
- **MUI**: To use the UI components and as a design system
- **Formik & Yup**: To manage the state of the prompt form and create validation schemas

Using all these technologies I build a simple UI with a MUI Card component, then I created a form where I manage all the inputs with Formik, the text and select inputs are directly from MUI, and to create the validation schema I used Yup to mark as required those fields and don’t send them empty.

With the UI finished, I started creating the endpoint in the API directory to consume ChatGPT’s API, just using a fetch like [@whoiskatrin](https://twitter.com/whoiskatrin?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1634973237829599233%7Ctwgr%5Eb49b9d28e6ea7383ef16ea3c8c6040656ff0c944%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2Fwhoiskatrin2Fstatus2F1634973237829599233widget%3DTweet)’s project, indicating which OpenAI model to use, in this case, *text-davinci-003*, you can learn more about those models [here](https://platform.openai.com/docs/api-reference/models/list). Obviously, in that request, I send the prompt from the user into a string indicating ChatGPT to only give me the code, without comments or more results.

## Added value

Yes, there’re options like GitHub Copilot that resolve that problem, that’s why I added a select option to choose if the syntax should be an arrow function or a simple function.

I’ll add more features, like a TypeScript option, and use a TS Interface to use as a reference, but now I’m working on more projects!

## Inspiring people!

The cool thing about side projects is that inspires people like us, we can use our tech skill that serves the bread on the table to transform ideas into products, and products into a community, as [@Serudda](https://twitter.com/serudda) talks in this [video](https://www.youtube.com/watch?v=LXgPNdw8avI&t) (video audio in Spanish).
