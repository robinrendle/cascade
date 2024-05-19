---
title: Generating text colors
date: 2024-05-18T22:22:40-07:00
tags:
  - lea verou
  - miriam suzanne
  - color
  - relative color syntax
---

I had never heard of this exciting `contrast-color` function before:

```css
.element {
	background: var(--bg-color);
	color: contrast-color(var(--bg-color));
}
```

That’s from Lea Verou’s great piece about [generating text colors](https://lea.verou.me/blog/2024/contrast-color/). The way it works is that you pass a background color into the function and it’ll spit out a color that’s accessible to read as text on top of it. This solves about 90% of the problems I have with working with colors today as it’s super frustrating to constantly redefine variables or create new ones, just when the design calls for the background to change.

It might be a bit of a wait until it lands in browsers though, as Lea writes:

> _Glorious, isn’t it?_ Of course, soonish in spec years is still, well, years. As a data point, you can see in [my past spec work](https://lea.verou.me/specs/) that with a bit of luck (and browser interest), it can take as little as 2 years to get a feature shipped across all major browsers after it’s been specced. When the standards work is also well-funded, there have even been cases where a feature went **from conception to baseline in 2 years**, with [Cascade Layers](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_layers) being the poster child for this: [proposal by Miriam in Oct 2019](https://github.com/w3c/csswg-drafts/issues/4470), [shipped in every major browser by Mar 2022](https://caniuse.com/css-cascade-layers). But 2 years is still a long time (and there are no guarantees it won’t be longer). What is our recourse until then?

Lea then talks about how it’s possible to set the color of text based on its background today with the relative color syntax. Super smart stuff.
