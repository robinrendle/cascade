---
title: :nth-child(of)
date: 2024-07-25T20:38:45-07:00
tags:
	- Manuel Matuzović
---

I’m not sure how I fell of the bandwagon of Manuel Matuzović’s excellent 100 days of CSS...

> It’s time to get me up to speed with modern CSS. There’s so much new in CSS that I know too little about. To change that I’ve started #100DaysOfMoreOrLessModernCSS. Why more or less modern CSS? Because some topics will be about cutting-edge features, while other stuff has been around for quite a while already, but I just have little to no experience with it.

That’s from the latest post all about [this syntax I’d never seen before](https://matuzo.at/blog/2024/100daysof-day108):

```css
li:nth-child(even of :not([hidden])) {
  background-color: aqua;
}
```

The idea is to filter all of the even list elements that aren’t hidden. That is extremely useful and good to know!
