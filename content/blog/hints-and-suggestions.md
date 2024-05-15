---
title: Hints and Suggestions
date: 2024-05-10
tags:
  - miriam suzanne
  - css is awesome
  - cascade
---

Miriam Suzanne gave [a fantastic talk](https://www.youtube.com/live/iLxJ6PtuF9M?si=UmqNz2JfyDfWh0pN&t=4191) the other day during 11ty’s _International Symposium on Making Web Sites Real Good_ and I couldn’t possibly recommend it more. The highlight for me was when Miriam talks about the “CSS is awesome” meme:

> This is the reason that the default overflow is visible: if we get cocky and make a box too small for our text, browsers will try to bail us out. Not because it’s the best looking solution but because the web will try to protect content whenever it can. Browsers are helping us out here.
>
> So to me, this meme, this “CSS is awesome” box-breaking meme, it actually perfectly captures what is awesome about CSS and how much can go wrong when we try to control things that we shouldn’t necessarily control. When we add too many constraints at once.
>
> I love that meme for the wrong reasons.

Miriam argues that this is a core part of CSS’s design but it’s also a political choice: to protect the content and protect the user we shouldn’t treat the CSS we write as a series of strict rules. Instead, we must think of them as hints and suggestions to the browser. Or, as Miriam says: guidance with a light touch.
