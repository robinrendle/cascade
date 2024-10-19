---
title: Customizable selects
date: 2024-10-19T08:47:26-07:00
tags:
- una kravets
- select
- popover
- anchor positioning
---

I almost missed [this great post](https://developer.chrome.com/blog/rfc-customizable-select) by Una Kravets on the upcoming changes to the `<select>` element where soon we’ll be able to customize it to our heart’s content without the need to hack things together. Una shows how we’ll be able to do that soon with just this little bit of CSS:

```css
select,
::picker(select) {
	appearance: base-select;
}
```

A few visual changes are made by default which is weird and interesting, but the most important thing is that now under the hood we have access to style the popover when we click that `<select>`. This is rad as hell and I can’t wait for this to land in browsers.

This is a neat detail, too:

> The new customizable `<select>` uses functionality from [popover](https://developer.chrome.com/blog/introducing-popover-api) and [anchor positioning](https://developer.chrome.com/blog/anchor-positioning-api). It's built with these two underlying technologies. This means that the drop-down option list within a select acts as a popover which is anchored to the trigger button that opens the select.
