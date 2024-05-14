---
title: Detect JavaScript Support
date: 2024-04-21
tags:
  - media queries
  - ryan mulligan
---

Ryan Mulligan on the new-to-me [`scripting` CSS media feature](https://ryanmulligan.dev/blog/detect-js-support-in-css/):

> With this feature, we can provide alternative CSS rules depending on whether or not JavaScript is available in the user's browser. It can also help reduce flashes of unstyled content or undesirable layout shifts.

This is super neat, so you can now write a media query and ask the browser if JavaScript is on:

```css
@media (scripting: enabled) {
	.my-element {
		/* enhanced styles if JS is available */
	}
}
```

...or disabled:

```css
@media (scripting: none) {
	.my-element {
		/* fallback styles when JS is not supported */
	}
}
```

Ryan has a great demo of when you want to do that, how to combine queries together for some powerful styling possibilities, and some issues that might pop up when browser extensions are installed.
