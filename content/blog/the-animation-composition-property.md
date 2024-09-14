---
title: The animation-composition property
date: 2024-09-14T08:24:56-07:00
tags:
- bramus
- Manuel Matuzović
---

How have I never heard of the `animation-composition` property before? I just spotted it over on [Manuel Matuzović’s blog](https://matuzo.at/blog/2024/100daysof-day109):

> CSS animations can be composited in three ways: replace, add, and accumulate. The animation-composition property allows you to switch between them.

Huh! So you can effectively add, replace, or combine animations together which is something I’ve never thought about before! I had never even thought much about the default behavior too, which replaces an animation on an element, so that in the CSS below the `.element` will only move `100px`...

```css
.element {
  animation: move 2s infinite;
  transform: translateX(10px);
}

@keyframes move {
  to {
    transform: translateX(100px);
  }
}
```

But what if you wanted these properties to stack, so that you have `100` + `10` here? That’s what `animation-composition` is for and you can use it like this:

```css
.element {
  animation: move 2s infinite;
  transform: translateX(10px);
  animation-composition: add;
}

@keyframes move {
	to {
		transform: translateX(100px);
	}
}
```

Huh! Very neat indeed!

The funny thing is that when I saw this property this morning my first thought was: _why on earth do we need this?_ I couldn’t imagine scenarios where this would help me out of tricky problems or help me with animation work (which, admittedly, is very rare for me). And then later in the afternoon I was working with an engineer and realized that we could use this `animation-composition` stuff without writing a bunch of complicated JavaScript!

Oh and make sure to check out Bramus’ post [combining multiple animation effects](https://developer.chrome.com/docs/css-ui/css-animation-composition), too.
