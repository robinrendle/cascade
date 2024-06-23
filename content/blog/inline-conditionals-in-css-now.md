---
title: Inline conditionals in CSS, now?
date: 2024-06-23T15:58:53-07:00
tags:
- lea verou
- jane ori
- if
---

This is a great post by [Lea Verou](https://lea.verou.me/blog/2024/css-conditionals-now/) all about conditional statements in CSS:

> A couple days ago, I posted about the recent [CSS WG resolution to add an if() function to CSS](https://lea.verou.me/blog/2024/css-conditionals). Great as it may be, this is still a long way off, two years if everything goes super smoothly, more if not. So what can you do when you need conditionals right now?
>
> You may be pleased to find that you’re not completely out of luck. There is a series of brilliant, horrible hacks that enable you to expose the kinds of higher level custom properties that conditionals typically enable.

One technique that hurts my brain to think about is what Jane Ori called [“type grinding”](https://www.bitovi.com/blog/css-only-type-grinding-casting-tokens-into-useful-values) a few years ago. The idea is that you daisy-chain multiple `@property` declarations to change the value of a CSS variable as it passes through them. Which makes for a wild, mind-bending read.
