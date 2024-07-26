---
title: CSS Grid Areas
date: 2024-07-26T09:22:53-07:00
tags:
- ahmad shadeed
- grid
---

After all these years of using CSS Grid and I still feel like I haven’t grokked everything that it’s capable of. [Ahmad Shadeed’s latest interactive tutorial](https://ishadeed.com/article/css-grid-area/) is a great reminder of that where he’s written about named grid areas and explains the following bit of CSS:

```css
.layout {
  grid-template-columns:  [full-start] 1fr
                          [content-start] 2fr
                          [content-end] 1fr [full-end];
}
```

So what Ahmad has done here is defined and named specific areas of a grid and then he can use them elsewhere in his CSS like this:

```css
.layout-item {
  grid-column: content-start / content-end;
}
```

Smart stuff.
