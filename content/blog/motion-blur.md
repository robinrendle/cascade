---
title: Motion blur
date: 2024-06-29T09:08:42-07:00
tags:
	- adam argyle
---

Oooooh here’s something I’ve never thought about when it comes to CSS: [motion blur](https://github.com/w3c/csswg-drafts/issues/3837)! Adam Argyle wrote this back in 2019 (!) but it still feels new and exciting to me:

> Professional polish of motion graphics often includes the application of motion blur. In most cases, it's a boolean toggled at the layer level, that then tells the engine to set a blur amount based on the speed of the pixels. This effect makes animations much closer to real life, among other nice benefits. CSS currently is incapable of such an effect. Instead, a strobing, ghosted type effect is often what we get instead.

I like this proposal, too:

```css
.animated-layer {
  animation: rotate .5s linear infinite;
  motion-rendering: blur;
  motion-shutter-angle: 180deg;
}

@keyframes rotate {
  to {
    transform: rotate(1turn);
  }
}
```

Also, reading the comments on this thread is fun and reveals just how complex the standards process is for adding anything new to CSS.
