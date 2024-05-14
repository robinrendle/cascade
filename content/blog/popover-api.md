---
title: Popover API
date: 2024-04-28
tags:
  - title attribute
  - popover
  - dialog
---

Una Kravets has the scoop on the Popover API being [fully supported in browsers](https://web.dev/blog/popover-api):

> It's happening! One of the features I am most hyped about has just landed across all modern browsers and is officially a part of Baseline 2024. And this feature is the Popover API. Popover provides so many awesome primitives and developer affordances for building layered interfaces like tooltips, menus, teaching UIs, and more.

“Baseline” is a way of measuring browser support that I had somehow managed to skip right over when [it was announced last year](https://developer.mozilla.org/en-US/blog/baseline-unified-view-stable-web-features/). But anyway, back to Una’s post: Popover is real neat because you don’t have to worry about z-index or focus management, and using the API is as simple as writing some good ol’ HTML:

```html
<button popovertarget="mypopover">Toggle the popover</button>
<div id="mypopover" popover>Popover content</div>
```

I like this! This syntax feels very much like invokers [and ya know that I love those](https://robinrendle.com/the-cascade/018-i-love-invokers-and-you-should-too/). But one question I had when reading Una’s post was this: when and how should I use the Popover API?

Thankfully, Hidde de Vries has collected a bunch of examples from menus and popover lists to teaching UIs and mega-navs that’s worth looking at in his post about [Popover semantics](https://hidde.blog/popover-semantics/). Hidde also reminds me that the `title` attribute exists which makes things even more complicated. And it looks like there’s rumblings about [being able to customize the styles of that in the future](https://github.com/openui/open-ui/issues/730) which I would LOVE.

Another confounding question here: when should I use `[popover]` and when should I reach for `<dialog>`? [MDN recommends](https://developer.mozilla.org/en-US/docs/Web/API/Popover_API) that this decision should be based on whether you need the content of the page to “inert” whilst this thing is active:

> Popovers created using the Popover API are always non-modal. If you want to create a modal popover, a `<dialog>` element is the right way to go. There is significant overlap between the two — you might for example want to create a popover that persists, but control it using declarative HTML. You can turn a `<dialog>` element into a popover (`<dialog popover>` is perfectly valid) if you want to combine popover control with dialog semantics.

Huh! So you can write something like this:

```html
<dialog popover id="mypopover">This is some content</dialog>
<button popovertarget="mypopover">Open</button>
```

That’s handy. But wait, okay. Now I’m really, extremely confused—when should I use `title` versus `popover` versus `dialog` again? Back to Hidde’s post, he notes:

> My advice would be that whenever tooltips contain more than just plain text, a non-modal dialog would be more appropriate...

So I think the logic goes something like this:

1. ~~Use `title` if the content in my popover is just text.~~
2. Use the `popover` attribute if the content is plain text or a menu of options.
3. Use `<dialog>` if you need to force the user to make a decision or block all other interactions on the page.

_Update_: Sara Soueidan replied with [a great note](https://front-end.social/@SaraSoueidan/112352806194435232) that we shouldn’t reach for the `title` attribute at all and linked to this equally [great post about it](https://www.24a11y.com/2017/the-trials-and-tribulations-of-the-title-attribute/#:~:text=It%20is%20primarily%20displayed%20as,able%20to%20interact%20with%20it):

> It is primarily displayed as a native tooltip in desktop browsers, and revealed when a user mouse hovers over markup elements the `title` is set to. Because of this, it has been a universal usability challenge since its inception, as not all users have been consistently able to interact with it.
