---
title: How to animate around a circle
date: 2024-08-04T12:39:44-07:00
tags:
- animation
---

The other day I wanted to make a CSS animation where an object would rotate around a circle so this was the first thing I tried:

```css
@keyframes circle {
  0%{
    transform: rotate(0deg);
  } 100% {
    transform: rotate(360deg);
  }
}
```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="eYwWLog" data-pen-title="Untitled" data-user="robinrendle" data-token="7b14202a846b3480715218f43ddb696e" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/eYwWLog/7b14202a846b3480715218f43ddb696e">
  Untitled</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Gah! That’s not the right kind of rotation I wanted.

What I really needed was for the whole object to be locked in place and rotate around the center. So I tried again, but this time I added a `translate` in there:

```css
@keyframes circle {
  0%{
    transform: rotate(0deg) translate(-10px);
  }
  100%{
    transform: rotate(360deg) translate(-10px);
  }
}
```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="oNrWPOd" data-pen-title="Rotate Circle 1" data-user="robinrendle" data-token="542a7ec324b4e2f7bec146070718c187" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/oNrWPOd/542a7ec324b4e2f7bec146070718c187">
  Rotate Circle 1</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>

Okay, that’s got the position I want where the image rotates around a center – but how do I prevent that rotation of the image itself? WELL, I found kirupa’s post about [animating items around a point](https://www.kirupa.com/animations/rotating_items_around_a_point.htm) but all those items show the same side to the center as they rotate. So sadly that didn’t help me.

After fiddling with things and playing around, and I cannot tell you how I managed to get here dear reader, but this CSS eventually worked for me:

```css
@keyframes circle {
  0%{
    transform: rotate(0deg) translate(-10px) rotate(0deg);
  }
  100%{
    transform: rotate(360deg) translate(-10px) rotate(-360deg);
  }
}
```

<p class="codepen" data-height="300" data-default-tab="result" data-slug-hash="ZEdKMNB" data-pen-title="Rotate Circle 2" data-user="robinrendle" data-token="9f4ad69d9e9c58bc0c9de2c462ae3c29" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/robinrendle/pen/ZEdKMNB/9f4ad69d9e9c58bc0c9de2c462ae3c29">
  Rotate Circle 2</a> by Robin Rendle (<a href="https://codepen.io/robinrendle">@robinrendle</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

That’s the precise effect I was lookin’ for!
