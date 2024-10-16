---
title: Typography and Opentype Default Stylesheet
date: 2024-10-16T10:50:26-07:00
tags:
- richard rutter
- css reset
- typography
---

Richard Rutter made [a cool new CSS reset](https://clagnut.com/blog/2433/):

> The idea is to set sensible typographic defaults for use on prose (a column of text), making particular use of the font features provided by OpenType. The main principle is that it can be used as starting point for all projects, so doesn’t include design-specific aspects such as font choice, type scale or layout (including how you might like to set the line-length).
>
> Within the styles is mildly opinionated best practice, which will help set suitable styles should you forget.

There’s a lot of smart, sensible defaults and make sure to take a gander at [the full stylesheet](https://github.com/clagnut/TODS/blob/main/tods.css). But there’s little things like this:

```css
.centered {
  text-align: center;
  text-wrap: balance;
}
```

Just good type helper classes, with a handy reminder to use `text-wrap: balance` to boot.
