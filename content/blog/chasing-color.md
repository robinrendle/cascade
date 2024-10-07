---
title: Chasing color
date: 2024-10-06T17:57:25-07:00
tags:
- adam stoddard
- color
---

I love this post Adam Stoddard on building a color and theming system for his website because it outlines all the hidden and oft-ignored complexities behind great UI engineering. [Adam writes](https://aaadaaam.com/notes/chasing-color/):

> What does an ideal CSS color system look like? My answer to this question has evolved along the way, but here’s what I think, today:
>
> - Composable, cascading themes - You should be able to set different themes at the page-level, section-level, and component-level, and have them cascade down until a different theme is applied.
> - Light & dark mode for all themes - Color themes shouldn’t be in addition to light and dark mode, every theme includes light and dark mode support.
> - Expressive - It should be easy to change opacity, use tints and shades, etc. within the context of your system. No having to go off system just because you need to add transparency.
> - Micromanagement-free - You should never even have to think about working with specific hues at the component level. In other words, adding a new theme shouldn’t mean touching every component.
> - Small set of properties - You should be able to worth with a small set of properties that you can further modify vs. maintaining an extensive list of semantic colors. Easier to work with, and easier to make new themes.
> - Good DX - It should feel good to work with. Flexible, straightforward, reads intuitively, forgiving, consistent, etc.

Adam then walks step by step how we could go about doing that whilst listing the cons to his approach. One thing I really like about this system is how Adam uses the new [`light-dark()`](https://developer.mozilla.org/en-US/docs/Web/CSS/color_value/light-dark) function that I’d totally forgotten about. Super neat stuff.
