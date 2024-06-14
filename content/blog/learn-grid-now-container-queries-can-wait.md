---
title: Learn Grid Now, Container Queries Can Wait
date: 2024-06-14T09:00:22-07:00
tags:
  - miriam suzzane
  - grid
---

[Miriam Suzanne](https://www.oddbird.net/2024/06/13/css-layout/):

> There’s no rush to rip out all your media queries, and replace them with containers. You’ll be fine waiting for widely available support and your next scheduled re-factor.
>
> But if you’re still avoiding grid – whatever your reasons – you are, in fact, missing out. CSS grid is one of the best features in CSS, and one of the biggest time-savers on every site we build.

One part of Grid that I’ve been ignoring for too long is the whole template areas syntax...

```css
.grid {
  display: grid;
  grid-template-areas:
    "head head"
    "nav  main"
    ".  foot";
}

.grid header {
  grid-area: head;
}

/* etc. etc. */
```

For some reason it doesn’t feel grid-y enough for me but I should just sit down and try to get used to it. Even looking at it now I’m slowly realizing that it’s real nice that you can use `.` to denote an empty column which makes things quite a bit easier.  Oh and this reminds me, the other day I spotted this [CSS Grid Template Builder](https://codepen.io/anthonydugois/pen/RpYBmy) by [Anthony Dugois](https://codepen.io/anthonydugois) and it’s pretty handy!
