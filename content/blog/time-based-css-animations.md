---
title: Time-based CSS animations
date: 2024-05-16T13:12:37-07:00
tags:
  - animations
  - math functions
  - chuan
---

This post by Chuan about [time-based CSS animations](https://yuanchuan.dev/time-based-css-animations) has a ton of bonkers CSS tricks that are worth checking out:

> After years of wait, CSS now has enough Math functions supported, particularly [mod()](https://developer.mozilla.org/en-US/docs/Web/CSS/mod), [round()](https://developer.mozilla.org/en-US/docs/Web/CSS/round), and [trigonometric functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions#trigonometric_functions). It's time to revisit the time-based way of animation, hope it'll be more useful this time.

Chuan uses these functions to set up a custom variable via the CSS Houdini API and then track the time in milliseconds. So beware, this is pretty wild stuff:

```css
@property --t {
	syntax: "<integer>";
	initial-value: 0;
	inherits: true;
}

@keyframes tick {
	from {
		--t: 0;
	}
	to {
		--t: 86400000;
	}
}

:root {
	animation: tick 86400000ms linear infinite;
}
```

Chaun also works on [css-doodle](https://css-doodle.com/) which is a web component for drawing cool and elaborate patterns. All of this stuff is very much worth checking out!
