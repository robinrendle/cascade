---
title: Baseline
date: 2024-05-19T20:02:18-07:00
tags:
  - baseline
  - CSS5
---

There’s been some chatter over the last few days about “Baseline” and I’d heard the name in passing before but I must be honest: I was pretty embarrassed to ask around because a lot of blog posts mention this thing as if it’s been kicking around forever.

(I think it was announced at Google I/O last year and it managed to slip me by! How embarrassing!)

Let’s set the stage then: a “Baseline” feature can be anything—a new CSS property or a handy new thing in JavaScript—and the idea is that, at a glance, us developers can see if that feature is coming down the pipeline or if it’s already supported by browsers today. This should help us get a feeling for whether we can use the feature without a care or if we should think about a backup plan if it’s not supported by some browsers.

This is great because the standards process has felt entirely random to me over the years. I usually don’t know what’s going to ship or what cool new features are going to be available soon. “Baseline 2024” for example is all the features that are new to the web platform this year and you can see a handy list of all them over on [The Web Platform Dashboard](https://webstatus.dev/?q=baseline_date%3A2024-01-01..2024-12-01) which is pretty fantastic. In terms of CSS, that means...

- Declarative Shadow DOM
- CSS offset-position and offsetpath values
- The Popover API
- align-content on block layout

There’s also the Baseline widget (boy, keep saying that over and over and it feels like saying “iPad” obnoxiously without the “the”) and it’s implemented all over MDN and CanIUse, like in [this example for the new `<search>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/search). This chap started to be rolled out [back in December](https://developer.mozilla.org/en-US/blog/baseline-evolution-on-mdn/) and the label comes in three flavors: Widely supported, Newly available, and Limited availability.

This is all useful stuff but I love what [Jeremy had to say](https://adactio.com/journal/21128) last week:

> ...I really like how it’s nice and glanceable right now. But it would be nice if there way some indication that a newly-available feature is a progressive enhancement.
>
> For now it’s up to us to make that distinction. So don’t fall into the trap of thinking that just because a feature isn’t listed as widely-available you can’t use it yet.

One example might be `text-wrap: balance` because, in the spirit of giving [hints and suggestions to browsers](https://csscade.com/hints-and-suggestions/), it’s totally okay if older browsers ignore that rule since it’s a nice-to-have progressive enhancement. I do think that the “Widely supported” label is supposed to give an indication of that. But then some features that are “Newly available” are totally fine to use because they don’t break any functionality if they’re not supported and they gracefully degrade. So things are a _little_ confusing on that front today.

Either way, I think this is a great improvement and I’m going to use the heck out of it. And I think I prefer bucketing these new features by year more so than I do by version number, [like “CSS5”](https://frontendmasters.com/blog/css-5/).
