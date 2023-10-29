---
title: "What is React?"
excerpt: "React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies."

coverImage: "cover.png"
date: "2023-10-28T10:01:00.000Z"
author: polgubau
tags: ["vue", "javascript", "web"]
ogImage:
  url: "cover.png"
---

### Rendering User Interfaces

To understand how **React works**, we first need a basic understanding of how browsers interpret your code to create interactive user interfaces (UI).

When a user visits a web page, the server returns an HTML file to the browser that may look like this:

![What is the dom, a visual guide](/assets/blog/posts/what-is-react/html-to-dom.png "What is the dom, a visual guide")
_Image extracted from [Next.js docs](https://vercel.com/templates/next.js)_

The browser then reads the HTML and constructs the **Document Object Model** (DOM).

### What is the DOM?

The DOM is an object representation of the HTML elements. It acts as a bridge between your code and the user interface, and has a **tree-like structure** with parent and child relationships.

You can use DOM methods and a programming language, such as JavaScript, to listen to user events and manipulate the DOM by selecting, adding, updating, and deleting specific elements in the user interface. DOM manipulation allows you to not only target specific elements, but also change their style and content.

### What is the Virtual DOM?

