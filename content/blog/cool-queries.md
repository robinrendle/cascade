---
title: Cool queries
date: 2024-04-22
tags:
  - media queries
  - style queries
---

There’s lots of query-related things that CSS can do that’s pretty neat. First up you’ve got your bog standard media queries where you can activate some styles when the size of the viewport reaches a certain value:

```css
@media (min-width: 700px) {
	.my-element {
		background: yellow;
	}
}
```

But now that [nesting has pretty good support](https://caniuse.com/?search=css%20nesting) then it’s just a whole lot nicer to organize them more like this:

```css
.my-element {
	@media (min-width: 500px) {
	}
	@media (min-width: 700px) {
	}
	@media (min-width: 800px) {
	}
}
```

Ahhhh that is very nice and finally matches my mental model of how these queries are applied by the browser. But as I was spelunking through the [Media Queries Level 5 spec](https://www.w3.org/TR/mediaqueries-5/), I noticed that you can also write these media queries like this:

```css
.my-element {
	@media (width >= 500px) {
		background: yellow;
	}
}
```

That’s even nicerer! I’m not sure why I’ve never heard of this syntax before but it sure looks way tidier to me. You can even do more complex things with this syntax like add a more complex range to the mix:

```css
.my-element {
	@media (1000px <= width <= 1500px) {
		background: yellow;
	}
}
```

This tells the browser to make the background yellow between 1000px and 1500px. That’s really, really nice. I also had no idea that was possible until just a second ago!

Then there’s of course other pretty popular things that media queries can do, such as enable styles based on the orientation of the device. We’ve likely used these to fix some weird mobile bug:

```css
.my-element {
	@media (orientation: portrait) {
	}
	@media (orientation: landscape) {
	}
}
```

Also, as I mentioned yesterday, you can [detect JavaScript support](https://www.csscade.com/detect-javascript-support) with a media query now:

```css
.my-element {
	@media (scripting: enabled) {
	}
}
```

Another real shocker found deep in the spec is that it’s possible to use a media query to style an element based on whether it’s overflowing the parent, like this:

```css
.parent {
	max-width: 300px;
}

.child {
	width: 500px;

	@media (overflow-inline) {
		background: yellow;
	}
}
```

What! That seems fantastically useful! You can play with [a demo](https://codepen.io/robinrendle/pen/ZEZVGgJ??editors=1100) but it was surprising to me that this bad boy seems to have great browser support already? I must’ve missed the memo.

Update: [Kilian Valkhof replied to this](https://mastodon.social/@Kilian/112315542208224490) and explained that what’s going on here isn’t what I originally assumed! @media queries only apply to the user’s device, not to anything on the page itself. Which is an extreme bummer! It seems that being able to detect whether an element is overflowing with CSS alone isn’t quite possible yet unfortunately.

Okay then there’s the really cool stuff, like container queries. [Ahmad Shadeed’s primer](https://ishadeed.com/article/css-container-query-guide/) is required reading but I’ve always been confused by the syntax without nesting. _With_ nesting, container queries are so much easier to read:

```css
.parent {
	container-name: parent;
	container-type: inline-size;
}

.child {
	@container parent (width >= 1000px) {
		background: yellow;
	}
}
```

It’s pretty neat that you can add in the `width` shorthand there and it all works together. I love it when multiple things overlap in this way to improve the whole “ecosystem” of CSS.

Next up: Una Kravets’s [post on style queries](https://developer.chrome.com/docs/css-ui/style-queries) was a real what the heck moment when I first read it because you can now check to see if an element has certain styles applied to it. Like this:

```css
.parent {
	--background: red;
}

.child {
	@container style(--background: red) {
		background: green;
	}
}
```

The child element here will only have a green background if the variable in a parent element is set to red.

Right now it looks like browsers only support checking CSS variables like this but in the future they’ll expand to do all sorts of bonkers things. I still feel like I’m wrapping my head around the implications of these style queries but this will be nice if you have a component with a mode or a toggle from one visual state to another. Say, a navigation component that can switch orientations and the child elements change their style based on one CSS value.
