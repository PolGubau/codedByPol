---
title: "What is Nextjs?"
excerpt: "Next.js is a flexible React framework that gives you building blocks to create fast web applications."

coverImage: "cover.png"
date: "2023-10-29T10:01:00.000Z"
author: polgubau
tags: ["nextjs", "javascript", "web"]
ogImage:
  url: "cover.png"
---

## What is Next.js?

Nowadays, it's common to start a [React Project](/posts/what-is-react) with the support of a modern framework. Next.js is one of the most popular for React and it's a powerful tool to build web applications, static websites, and server-side rendered applications.

By framework, we mean Next.js handles the tooling and configuration needed for React, and provides additional structure, features, and optimizations for your application.

To understand what Next.js we will focus first in what they say about themselves:

> Next.js is a flexible **React framework** that gives you building blocks to create fast **web applications**.

Definition from the [Official Nextjs Page](https://nextjs.org/learn-pages-router/foundations/about-nextjs/what-is-nextjs)

But what exactly do they mean by this? Let’s spend some time expanding on what React and Next.js are and how they can help.

### Building Blocks of a Web Application

There are a few things you need to consider when building modern applications. Such as:

- User Interface - how users will consume and interact with your application.
- Routing - how users navigate between different parts of your application.
- Data Fetching - where your data lives and how to get it.
- Rendering - when and where you render static or dynamic content.
- Integrations - what third-party services you use (CMS, auth, payments, etc) and how you connect to them.
- Infrastructure - where you deploy, store, and run your application code (Serverless, CDN, Edge, etc).
- Performance - how to optimize your application for end-users.
- Scalability - how your application adapts as your team, data, and traffic grow.
- Developer Experience - your team’s experience building and maintaining your application.

For each part of your application, you will need to decide whether you will build a solution yourself or use other tools such as libraries and frameworks.

## Introduction to Nextjs

### Main Features

Some of the main Next.js features include:

#### Routing

A file-system based router built on top of Server Components that supports layouts, nested routing, loading states, error handling, and more.

#### Rendering Client-side and Server-side

Rendering with Client and Server Components. Further optimized with Static and Dynamic Rendering on the server with Next.js. Streaming on Edge and Node.js runtimes.

#### Data Fetching

Simplified data fetching with async/await in Server Components, and an extended fetch API for request memoization, data caching and revalidation.

#### Styling

Support for your preferred styling methods, including CSS Modules, Tailwind CSS, and CSS-in-JS

#### Optimizations

Image, Fonts, and Script Optimizations to improve your application's Core Web Vitals and User Experience.

#### TypeScript

Improved support for TypeScript, with better type checking and more efficient compilation, as well as custom TypeScript Plugin and type checker.

### App Router vs Pages Router

Next.js has two different routers: the **App Router** and the **Pages Router**. The App Router is a newer router that allows you to use React's latest features, such as Server Components and Streaming. The Pages Router is the original Next.js router, which allowed you to build server-rendered React applications and continues to be supported for older Next.js applications.

## Installation of Next.js

System Requirements:

- Node.js 18.17 or later.
- macOS, Windows (including WSL), and Linux are supported.

### Automatic Installation

The recommended way to start a new Next.js app is using create-next-app, which sets up everything automatically for you. To create a project, run:

```bash
# terminal
npx create-next-app@latest
```

On installation, you'll see the following prompts:

````bash
# terminal
What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like to use `src/` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to customize the default import alias (@/*)? No / Yes
What import alias would you like configured? @/*```
````

After the prompts, create-next-app will create a folder with your project name and install the required dependencies.

#### Good to know:

- Next.js now ships with **TypeScript**, ESLint, and Tailwind CSS configuration by default.
- You can optionally use a src directory in the root of your project to separate your application's code from configuration files.

### Manual Installation

To manually create a new Next.js app, install the required packages:

```bash
# terminal
npm install next@latest react@latest react-dom@latest
```

Open your package.json file and add the following scripts:

```json
// package.json

{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

These scripts refer to the different stages of developing an application:

- dev: runs next dev to start Next.js in development mode.
- build: runs next build to build the application for production usage.
- start: runs next start to start a Next.js production server.
- lint: runs next lint to set up Next.js' built-in ESLint configuration.

## Nextjs File System Routing

Next.js uses file-system routing, which means the routes in your application are determined by how you structure your files.

In the app directory, this router allows you to use React's latest features and is an evolution of the Pages Router based on community feedback.

1. Create an **app/** folder, then add a **layout.tsx** and **page.tsx** file. These will be rendered when the user visits the root of your application (/).

2. Create a root layout inside app/layout.tsx with the required <html> and <body> tags:

```typescript
// app/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {" "}
      // write the language of your app here
      <body>{children}</body> // your app will be rendered here
    </html>
  );
}
```

3. Finally, create a home page **app/page.tsx** with some initial content:

```typescript
// app/page.tsx

export default function Page() {
  return <h1>Hello, Next.js!</h1>;
}
```

Good to know:

- If you forget to create layout.tsx, Next.js will automatically create this file when running the development server with next dev.

## The public folder

The public folder is a special folder in your Next project, it comes from the standard way to create structures in React. It contains static assets such as images, fonts, etc. Files inside public directory can then be referenced by your code starting from the base URL (/).

For example, if you add an image to public/my-image.png, the following code will access the image:

```typescript
// app/page.tsx
<img src="/my-image.png" alt="my image" />
```

## Run the Development Server

1. Run **npm run dev** to start the development server.
2. Visit http://localhost:3000 to view your application.
3. Edit app/layout.tsx (or pages/index.tsx) file and save it to see the updated result in your browser.

## Conclusion

Nextjs is a flexible React framework that gives you building blocks to create fast web applications. It has a lot of features that allows you to build a web application with a lot of different types of architecture. It's a good option to start a web application with React.

With this post, we have learned what Nextjs is and how to install it.

We will continue to explore Nextjs in the next posts.

## References

- [Next.js Official Docs](https://nextjs.org/docs/getting-started/project-structure)
- [Next.js Official Tutorial](https://nextjs.org/learn/basics/create-nextjs-app)
