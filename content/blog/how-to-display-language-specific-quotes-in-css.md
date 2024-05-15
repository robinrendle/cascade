---
title: How to display language-specific quotes in CSS
date: 2024-04-10
tags:
  - stefan judis
  - language
---

[Stefan Judis](https://www.stefanjudis.com/today-i-learned/how-to-use-language-dependent-quotes-in-css/):

> Quotation characters are language-specific. French, for example, uses « and ». Going all in with double quotes isn't correct and will anger quite some typography nerds (and French people).

I love this attention to detail and totally didn’t know you could do the following and browsers will pick the right kind of quote depending on the user’s language:

```css
blockquote::before {
	content: open-quote;
}

blockquote::after {
	content: close-quote;
}
```
