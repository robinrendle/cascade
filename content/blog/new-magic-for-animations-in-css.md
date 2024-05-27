---
title: New magic for animations in CSS
date: 2024-05-27T10:05:15-07:00
tags:
  - chase mccoy
  - animations
---

Cool, punk rock stuff coming in hot off the press [from Chase McCoy](https://chasem.co/2024/05/css-animations/) here:

> There are two new features coming to CSS that will make it much easier to further avoid JavaScript when implementing animations:
>
> 1. Animating to and from `display: none;` for the sake of enter/exit animations.
> 2. Animating to and from the intrinsic size of an element (such as `height: auto;`).
>
> Traditionally, animating something into our out of the screen (as opposed to just hiding it visually) required JavaScript to remove the element from the page after waiting for the animation or transition to complete. No longer!

This is a BIG deal. I feel like maybe 50% of my late-night panicked CSS-related searches are about these two topics alone. Perhaps the most eye-opening part of Chase’s blog post though is this bit:

```css
.item {
	@starting-style {
		opacity: 0;
	}

	opacity: 1;
	transition: opacity 0.5s;
}
```

This `@starting-style` chap is for when you want an element to be hidden by default but then fade in. And Una Kravets and Joey Arhar wrote about this a while back for [the Chrome blog](https://developer.chrome.com/blog/entry-exit-animations#the_starting-style_rule_for_entry_animations) where they have a fantastic demo of a todo list in which each new item added is invisible by default with `@starting-style` and then expands into view.

I can see myself using these new CSS animations in every project from now until the end of time!
