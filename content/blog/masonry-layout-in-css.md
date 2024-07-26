---
title: Masonry Layouts in CSS
date: 2024-04-20
tags:
  - masonry
  - layouts
  - grid
  - jen simmons
---

Jen Simmons has written a stellar piece for the WebKit blog about masonry layouts and a proposal to introduce them in [CSS Grid Level 3](https://webkit.org/blog/15269/help-us-invent-masonry-layouts-for-css-grid-level-3/):

> At its core, CSS Grid Level 3 provides a mechanism for turning off rows. It lets us create a columnar grid — a grid that’s made up of columns alone.

Neat! Masonry layouts are typically seen as Pinterest-esque interfaces and they’ve often been a bit painful to make (although it has been possible with JavaScript as [Andy Barefoot showed back in 2017](https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb)). Thankfully Jen shares half a dozen demos beyond the typical image waterfall example that I’ve seen many times before and so it’s clear how useful this sort of thing might be for complex typographic layouts like [this example](https://webkit.org/wp-content/uploads/image12-textgrid3-dark.png). Exciting stuff!

Okay, show me the proposal!

```css
.container {
	display: grid;
	grid-template-columns: 14ch repeat(auto-fill, minmax(28ch, 1fr)) 14ch;
	grid-template-rows: masonry;
}
```

That last line is where the magic happens. Effectively what you’re telling CSS Grid to do here is to ignore any rows so you can create an asymmetrical grid. However! There is some drama about this proposal as some folks argue that masonry layouts should instead be toggled on the `display` property like this:

```css
.container {
	display: masonry;
}
```

Since Jen is asking for feedback in her post about this proposal, here’s my take on all this hot drama:

- Having another display option like `display: masonry;` feels wrong to me and before I even got to Jen showing the proposed CSS, I imagined masonry layouts as simply being CSS Grid but with rows turned off.
- In the `display: masonry` version of CSS, I would definitely forget what’s available in Masonry layouts versus Grid layouts. I guarantee I’d have to look up what grid-like options (such as `gap` or `grid-columns` or whatever) were possible and I fear, like Jen does, that they’d get out of sync somehow between browsers.
- I was sort of happy when we stopped using `columns` in CSS and moved to CSS Grid but with this masonry option we’d have to go back to that? That feels like a bummer to me. I don’t want two separate syntaxes to denote columns in CSS! I am the problem!
- I had a maybe-dumb-thought whilst reading the proposal: what about masonry layouts where you can turn the columns off but keep the rows? So a horizontal masonry layout with `grid-template-columns: masonry` instead?
- Nope, okay. That suggestion broke my brain and I think I’ve forgotten both how CSS Grid works and my own name now. Please send help.

Anyway, I think we should go with Jen’s suggestion of masonry being a subset of options within CSS Grid. That’s the most reasonable, maintainable, and nice-to-the-platform option available with this proposal I reckon.
