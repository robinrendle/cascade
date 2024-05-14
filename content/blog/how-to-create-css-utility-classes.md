---
title: How to create CSS utility classes
date: 2024-04-19
tags:
  - andy bell
  - saneef ansari
  - utility classes
---

Just last week Andy Bell wrote about [his CSS boilerplate for starting new projects](https://piccalil.li/blog/a-css-project-boilerplate). But the part that caught my eye was the way that he’s using Tailwind to generate CSS utility classes like this:

```css
.m-l-10 {
	margin-left: 10px;
}
.m-r-10 {
	margin-right: 10px;
}
```

In my experience, utility classes in CSS—think Tailwind of Tachyons—tends to be a nightmare but a limited subset of them such as spacing classes or typographic helpers like this are genuinely handy. The problem is that you’ve often got to pick all of them outta those kinds of CSS frameworks or write your own by hand which is error prone and slow.

So Andy has a JSON file for each [design token](https://github.com/Set-Creative-Studio/cube-boilerplate/tree/main/src/design-tokens), like colors, spacing, font-size, which he then runs through Tailwind to create the classes. Then he imports that directly into his CSS. My first thought was: whoa! For every new project it must be amazing to tweak a few variables in a JSON file, run a command, and get a fresh batch of CSS utilities.

The other day I then spotted that Saneef Ansari was inspired by all this and made [a PostCSS plugin](https://github.com/saneef/postcss-design-token-utils) to do the same thing, except without Tailwind as a dependency. These design utilities then get converted into CSS custom properties like this:

```css
:root {
	--color-accent: #16a34a;
	--color-dark: #111827;
	--color-light: #f3f4f6;
	--space-xs: 0.25rem;
	--space-s: 0.5rem;
	--space-m: 1rem;
	--space-l: 2rem;
}
```

And you can also create the CSS utility classes with a single line of code!

That’s...extremely neat! My only jerky thought here is this: what if I didn’t want to use PostCSS as a dependency either? I could imagine a website where I just import some JSON or write my own classes, hit a button, and then export either a list of CSS classes...

```css
.bg-dark {
	background: #333;
}
.bg-light {
	background: #fff;
}
```

...or custom properties...

```css
:root {
	--bg-dark: #333;
	--bg-light: #fff;
}
```

...or both! Then I’m free to slam that into any project regardless of how it’s built and so I don’t need to even have npm as a dependency.
