---
title: An alternative proposal for CSS masonry
date: 2024-05-02
tags:
  - masonry
  - css grid
  - rachel andrew
---

[Rachel Andrew](https://developer.chrome.com/blog/masonry):

> The Chrome team believes that masonry should be a separate layout method, defined using `display: masonry` (or another keyword should a better name be decided upon). Later in this post, you can see some examples of what that could look like in code.
>
> There are two related reasons why we feel that masonry is better defined outside of grid layout—the potential of layout performance issues, and the fact that both masonry and grid have features that make sense in one layout method but not the other.

The most compelling argument for me is the potentially very confusing overlaps and underlaps between grid and masonry where sometimes a grid property just won’t apply to a masonry-style layout. However, this example that Rachel shares in her post certainly _feels_ icky to me:

```css
.masonry {
	display: masonry;
	masonry-template-tracks: repeat(auto-fill, auto);
}

.placed {
	masonry-track: 2 / 5;
}
```

At a quick glance, and without understanding too closely what’s going on under the hood, I’d question why the heck this looks so much like a grid-but-not-a-grid syntax. Maybe I just gotta sit with it some more though!
