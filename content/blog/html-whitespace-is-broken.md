---
title: HTML whitespace is broken
date: 2024-10-14T09:35:24-07:00
tags:
- doug parker
- whitespace
---

Doug Parker made some interesting notes about the [unexpected behavior of whitespace](https://blog.dwac.dev/posts/html-whitespace/):

> Why exactly does HTML work this way? Why did we make this language so complicated?
>
> I think the core problem here is that all whitespace in HTML is ambiguous. Specifically, it is ambiguous with regard to the developer's intent. For any given space, did the developer mean for it to be displayed to the user or did they just want to keep their code under the line length limit? It's impossible for the browser to know.
>
> To address this, the designers of HTML tried to come up with a set of rules which would roughly map the HTML code they wanted to write to the rendered output they wanted to create. So you, as a developer, have a UI in your head and write out the HTML to display it, and usually the whitespace "just works".

The unpredictability of whitespace causes all sorts of problems as Doug notes: code formatting bugs, accidental line breaks, etc. and there’s been so, so many times that I’ve had to fight whitespace that often I’ve just hacked things together until it works right or let it act out and be wrong and weird.

Doug mentions that although we can’t easily change this behavior of HTML without breaking changes, he recommends adding a new entity to help: `&ncsp;`.

