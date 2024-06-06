---
title: Responsive posters in CSS
date: 2024-06-05T19:32:29-07:00
tags: 
  - gradients
  - jeremy keith
  - container queries
  - aspect ratio
  - chris coyier
---

The other day I spotted these lovely [VHS posters](https://theinspirationgrid.com/vhs-tape-poster-collection-by-xavier-esclusa-trias/) and wondered how you might make that slanted background pattern there with just CSS. So I took a crack at it and got pretty close: 

<p class="codepen" data-height="600" data-default-tab="result" data-slug-hash="abrWMXa" data-pen-title="Responsive JVC Video Cassette" data-user="robinrendle" data-token="04e692f87c0c86c0dd626531b7bc90dd" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/abrWMXa/04e692f87c0c86c0dd626531b7bc90dd">
  Responsive JVC Video Cassette</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

This isn’t an SVG (which is probably the best way to make something like this) but instead it’s plain ol’ CSS. Try and resize the browser though and you’ll see it respond to the height and width of the viewport which feels swish.

So here’s a quick summary of the trick: first I set up container queries and aspect-ratio on the wrapper element...

```css
.cassette {
	container-type: inline-size;
	aspect-ratio: 70/99;
}
```

That’s what handles all the resizing. Now we can set up some variables:

```css
:root {
  --first-stop: 20cqw;
  --second-stop: 40cqw;
  --third-stop: 60cqw;
  --fourth-stop: 80cqw;
  --fifth-stop: 100cqw;
  --sixth-stop: 150cqw;
  --red: hsl(350, 100%, 50%);
  --orange: hsl(13, 100%, 50%);
  --gray: hsl(17, 19%, 73%);
  --white: hsl(0, 0%, 100%);
}
```

Those `cqw` length units are pretty dang handy. `1cqw` is 1% of the container’s width which means I can use them in the `repeating-linear-gradient` property below to create that background pattern:

```css
.body-wrapper {
  background-image:
    repeating-linear-gradient(
      135deg,
      var(--white),
      var(--white) var(--first-stop),
      var(--red) var(--first-stop),
      var(--red) var(--second-stop),
      var(--orange) var(--second-stop),
      var(--orange) var(--third-stop),
      var(--gray) var(--third-stop),
      var(--gray) var(--fourth-stop),
      var(--white) var(--fourth-stop),
      var(--white) var(--fifth-stop),
      var(--white) var(--sixth-stop),
    );
}
```

I’m sure there’s a more elegant way of doing this but I kept playing around with these values until it looked right. I also set the font-size and position of elements to respond to the size of the container, too:

```css
header {
  padding: 3cqw;
}

h2 {
  font-size: 10cqw;
}
```


This is fantastic because it means I don’t have to write a bunch of media queries all over the place. I just set the font-size and forget it. And that’s not a dig at media queries! Well, okay – it is. But I am slowly coming to the conclusion that media queries are a design smell. Sometimes they indicate that my code could use more modern CSS techniques to avoid that little bit of extra complexity and logic.

Wellllll...sorta. Chris wrote about [this optimistic view of container queries](https://frontendmasters.com/blog/weve-got-container-queries-now-but-are-we-actually-using-them/) where we all assumed that...

> ...on any given project, there would be more @container in the CSS than @media. I joined that refrain. I thought for sure it would be true, if not, more like 75%, especially considering how so many sites these days are created by composing sites through component libraries, and since components don’t know where they will be used, the CSS that style those components would use all container queries.
> 
> So, did this turn out to be true?
> 
> Anecdotally: no, not really.

It’s a great breakdown of why we don’t use container queries all over the place like I have in my little demo above. But either way, this whole “web poster” design with cqw units and a dash of `aspect-ratio` is super neat and it reminds me of what [Jeremy said](https://adactio.com/journal/21146) just the other day:

> I really like the newly-launched website for [this year’s XOXO festival](https://2024.xoxofest.com/). I like that the design is pretty much the same for really small screens, really large screens, and everything in between because everything just scales. It’s simultaneously a flyer, a poster, and a billboard.
