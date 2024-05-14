---
title: Playing with Infinity in CSS
date: 2024-04-19
tags:
  - calc
  - will boyd
---

There’s not many blog posts that upset the natural order of CSS, but I’m still reeling from this one by Will Boyd where, back in February, he wrote about the [infinity constant in CSS](https://codersblock.com/blog/playing-with-infinity-in-css/).

You can use it just like this...

```css
.element {
	z-index: calc(infinity);
}
```

...and that’ll always be the biggest z-index on the page. That’s neat! And...weird? It’s definitely worth checking out Will’s list of practical examples of `infinity`, too.
