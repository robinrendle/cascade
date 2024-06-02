---
title: A common web component learning blunder
date: 2024-06-02T11:53:40-07:00
tags: 
  - dave rupert 
  - web components
  - frameworks
---

[Dave Rupert](https://daverupert.com/2024/05/cold-turkey-wont-fix-your-javascript-addiction/):

> Through stalking the [#WebComponents](https://mastodon.social/tags/webcomponents) hashtag and [my Frontend Masters course](https://frontendmasters.com/courses/web-components/), I’m privy to a lot of developers’ first experiences with web components. There’s a wide range of people digging in, but the most common first-time experience I come across is a developer coming from a classical component framework like React with JSX going straight to writing vanilla Web Components, becoming frustrated, and then deeming web components “not ready for primetime.”

The gist here is that HTML Web Components aren’t really meant to replace these frameworks at all and that’s something I really struggled with until I had my eureka moment [a few months ago](https://buttondown.email/cascade/archive/005-why-web-components/):

> I don’t think we should see web components like the ones you might find in a huge monolithic React app: your Button or Table or Input components. Instead, I’ve started to come around and see Web Components as filling in the blanks of what we can do with hypertext: they’re really just small, reusable chunks of code that extends the language of HTML.
