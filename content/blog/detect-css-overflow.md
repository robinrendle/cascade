---
title: Can you detect overflow with CSS?
date: 2024-04-27
tags:
  - overflow
  - bramus
  - scroll-driven animations
  - killian valkhof
---

The other day I made a daft and careless mistake whilst writing about [cool queries](https://www.csscade.com/cool-queries) and specifically this bit of code:

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

After misreading the spec and making a quick demo in the browser, I thought I had cracked the problem of being able to detect scrollable containers with just CSS. I assumed what was happening here was that the `overflow-inline` media query above would detect when the child element was exceeding the bounds of the parent element and then I could change its background to yellow. The demo appeared to work, I had solved the three body problem in CSS, wonderful.

Except, well. It doesn’t work!

Later that same day, Kilian Valkhof wrote up a very good post about [why this isn’t the case](https://kilianvalkhof.com/2024/css-html/your-page-cant-change-media-features/) at all:

> Media features say something about the device, and the overflow media feature says something about how the device handles overflowing. It doesn’t say anything about if the page currently is overflowing, just how it would handle overflowing.
>
> Overflow can be used to check how the “device”, or rather the medium in this case, handles overflowing content. On a screen, in most browsers, overflow is going to be “scroll”: If the content overflows, the device deals with that by letting you scroll. But when your medium is print overflow-block is going to evaluate to “paged”. Paper doesn’t scroll, it will continue the content on the next printed page instead.

As Kilian notes, media queries like the one I scribbled above are about the medium, not the page. So this is where I made my fatal and embarrassing mistake that we shall all now politely forget.

Thankfully though, instead of spreading CSS rumors on the internet like I had, back in 2023 Bramus had shown an honest way to detect overflow with—of course!—[scroll driven animations](https://www.bram.us/2023/09/16/solved-by-css-scroll-driven-animations-detect-if-an-element-can-scroll-or-not/). The code isn’t quite as succinct as have a nice little query do the work for us but this does make a bunch of sense to me, even at a quick glance:

```css
@keyframes detect-scroll {
	from,
	to {
		--can-scroll: ;
	}
}

.container {
	animation: detect-scroll linear;
	animation-timeline: scroll(self);

	--bg-if-can-scroll: var(--can-scroll) lime;
	--bg-if-cant-scroll: red;
	background: var(--bg-if-can-scroll, var(--bg-if-cant-scroll));
}
```

Bramus writes:

> For elements that have scrollable overflow, the animation will be active, so the computed value of `--can-scroll` will be `1`. For elements without scrollable overflow, the value will be `0`

Fantastic! The whole post walks through this block of code in much more detail and so it’s very much worth reading but this made me sigh a great sigh of relief. I made a little demo where you can add more words to a sentence and see the moment these styles are enabled, too:

<p class="codepen" data-height="500" data-default-tab="result" data-slug-hash="MWRxNJr" data-user="robinrendle" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/MWRxNJr">
  Detect scroll with CSS</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

It’s also worth pointing to Bramus’s excellent page of demos for [scroll-driven animations](https://scroll-driven-animations.style/). I feel like it’s about time that I dig my heels in and really explore what’s possible since up until now I’ve been ignoring this CSS superpower.
