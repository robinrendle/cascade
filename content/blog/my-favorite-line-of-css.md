---
title: My favorite line of CSS
date: 2024-07-12T08:40:42-07:00
tags:
  - dave rupert
  - eric portis
  - view transitions
  - animations
---

I think my favorite line of CSS has finally been usurped! For maybe a decade my favorite line was this bad boy:

```css
.element {
	display: grid;
	place-items: center;
}
```

Pure, simple, perfect. Throw some viewport units in on top and you now have Megazord-like super powers to take control of the browser canvas like you never could before.

Now though, my favorite line is this:

```css
@view-transition {
	navigation: auto;
}
```

As Dave Rupert wrote a while back, this is [the easiest way to add view transitions](https://daverupert.com/2023/05/getting-started-view-transitions/) to your website today. And I’ve already added them here and on [my blog](https://robinrendle.com) whilst I figure out how exactly pages should animate in and out without making everyone sick of it.

Honestly, if this was the new default animation between pages on the internet then I’d be chuffed to bits. It feels a bit more app-like, a bit more polished and less janky then the clunky page switching of the past.

But but but!

Eric Portis warns us that this is all more complicated than it seems and when we add view transitions we need to test the heck out of them because [they break incremental loading](https://ericportis.com/posts/2023/view-transitions-break-incremental-rendering/):

> I worry that giving developers tools to explicitly block render – with or without View Transitions – is going to make experiencing the web on slow connections and cheap devices much worse.
>
> [...] We need tuned timeouts that ensure that the long tail of slow devices/connections don’t wait for View Transitions if they would excessively delay first paint.

So: I am very excited about my favorite new line of CSS but we have to tread lightly with this stuff because it could end up hurting folks more than it helps.
