---
title: In defense of asymmetric grids 
date: 2024-06-08T20:13:42-07:00
tags: 
  - grids
  - content first
---

CSS Grid has made me lazy. Whenever I start a new project I tend to pick a 12 column grid and move on to other things...

```css
.grid {
	grid-template-columns: repeat(12, 1fr);
}
```

...it’s almost too easy! This is probably also out of laziness in the design, too. I’d often pickup the [Bootstrap grid](https://getbootstrap.com/docs/4.0/layout/grid/) and after years of use I began to see every page built out of 12 columns. So layouts, and the grid systems they’re built out of, felt like a solved problem to me.

But I got into a layout pickle the other day because of this laziness: I realized that my layout looked so weird and wonky here on The Cascade because I was using my trusty 12 column layout without thinking about it. I’d then set every element on the page to fit within those arbitrary constraints:

```css
.main {
	grid-column: 5/13;
}

.sidebar {
	grid-column: 1/5;
}
```

The problem here was the sidebar would stretch too far at larger screen sizes and felt visually gross. So I did the unthinkable and tweaked the grid to fit the content instead:

```css
.grid {
	grid-template-columns: repeat(4, minmax(auto, 80px)) repeat(7, auto);
}
```

Translation: “make 4 columns with a max-width of 80px each, and then 7 columns that take up the space left over.” Reading CSS like this always takes an extra second for me to parse and walkthrough step by step but effectively all we’re doing here is telling the first 4 columns to be a different size than the remaining columns.

Gasp! An asymmetric grid! The horror!

Anyway, CSS grid is just a tool and it doesn’t have to be perfect or simple or make everything line up in equal measure. But I also realized here that the grid should always be subservient to the content. 

Or: content first, grid last.
