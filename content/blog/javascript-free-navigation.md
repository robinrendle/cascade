---
title: Javascript free navigation
date: 2024-06-16T09:39:10-07:00
tags:
  - anchor position
  - andy bell
  - michelle barker
  - popover
---

Thanks to Andy Bell’s ever-so-good newsletter, [The Index](https://piccalil.li/the-index/37/), I found myself ooo-ing and aaa-ing at Michelle Barker’s excellent post from back in May about creating a JavaScript-free menu with the latest bells and whistles like [anchor-positioning and the Popover API](https://css-irl.info/anchor-positioning-and-the-popover-api/):

> [Anchor positioning](https://www.w3.org/TR/css-anchor-position-1/) in CSS enables us to position an element relative to an anchor element anywhere on the page. Prior to this we could only position an element relative to its closest positioned ancestor, which sometimes meant doing some HTML and CSS gymnastics or, more often than not, resorting to Javascript for positioning elements like tooltips or nested submenus.

There’s a lot of good examples in that post that are worth checking out but one thing that stuck out to me was the [`<menu>` HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) which we can use like this for a series of interactive actions:

```html
<menu>
  <li><button>Copy</button></li>
  <li><button>Cut</button></li>
  <li><button>Paste</button></li>
</menu>
```

...how have I never used this before!?
