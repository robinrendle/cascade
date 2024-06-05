---
title: An intro to CSS anchor positioning
date: 2024-06-04T20:53:17-07:00
tags: 
  - anchor positioning
  - inset-area
  - brecht
---

I’ve been half-ignoring anchor positioning but patiently waiting for it to land in browsers for a while now. But [this explanation by Brecht](https://utilitybend.com/blog/lets-hang-an-intro-to-css-anchor-positioning-with-basic-examples) yesterday reminded me to buckle up and learn it all properly since it just landed in the latest version of Chrome and Edge.

One thing I hadn’t heard of before Brecht’s post was the [`inset-area` property](https://www.w3.org/TR/css-anchor-position-1/#inset-area) which sure is handy. As he explains, it lets you draw a grid around an element and then position something left/right/up/down within it:

```css
.anchored {
  position-anchor: --anchortome;
  position: absolute;
  inset-area: top span-all;
}
```

This feels like how I’d anchor-position something like a tooltip maybe 95% of the time which is neat. But! Although anchor positioning sure is going to be amazing for tooltips, it goes far beyond that. Re-reading [Roman Komarov’s post from last year](https://kizu.dev/anchor-positioning-experiments/) made me spit-take again: 

> It becomes possible to highlight something in a completely different place on the page, allowing elements to “know of each other”.

Not only does that sound punk rock and strangely ominious, I think that’s what anchor positioning really opens up.
