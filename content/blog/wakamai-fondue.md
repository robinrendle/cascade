---
title: Wakamai Fondue
date: 2024-08-27T20:53:18-07:00
tags:
- fonts
- tools
---

This is your daily reminder that [Wakamai Fondue](https://wakamaifondue.com/) is an invaluable resource when dealing with font files. A lot of the time I’ll buy a font and the PDF specimen won’t tell me how to use a feature with CSS! It’s annoying!

Thankfully the open beta has a host of improvements when it comes to variable fonts too, so first you upload your font and then tweak the optical size, weight, width, or turn on stylistic sets, fractions, and countless other OpenType goodies. It’ll then spit out the CSS that you need, like this:

```css
.element {
  font-feature-settings: "c2sc" 1, "dnom" 1, "frac" 1, "lnum" 1, "smcp" 1, "ss01" 1, "ss03" 1, "ss05" 1;
  font-variation-settings: "opsz" 48, "wght" 300, "wdth" 100, "ital" 1;
}
```
