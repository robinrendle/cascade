---
title: Design systems and strictness
date: 2024-04-19
tags:
  - design systems
---

A while back I rambled out loud about how [some design systems are way too strict](https://robinrendle.com/notes/the-other-side/):

> Being on the other side of design systems now as a product designer is super interesting. I kinda hate the rules and regulations and nitpicking! And if I can’t lean into the system then I will fight against it with every fiber of my being.

So, okay, what parts of a design system should be strict and which parts should allow for more flexibility then? For example, design tokens should probably be super strict. You should rarely add a new font size or color variable or space things out with 7px when your systems sets an 8px scale. Adding a new font to a design system should also be a very slow and deliberate process that shouldn’t be rushed. So that’s a no-go, too.

However, components should be _pretty_ locked down. You should be allowed to add components back to the system but a design systems team should be able to step in and demand that you use the standardized Button component over NewFancyButton. Otherwise all hell breaks loose and you have 5 different versions of everything.

However, however: adding variants of a component should be pretty lenient. If I need to add a green button to the design system then I don’t think that’s where a ton of oversight should be required to stop that because a variant doesn’t do as much damage as a whole new component might.

My rambling point here with all this is that there’s a spectrum of strictness when it comes to design systems and I think a lot of the work I did in the past ignored that. I saw our component library as being this pure and perfect thing that shouldn’t be messed with. But such intense strictness actually ended up hurting our team in the long run: folks didn’t want to contribute or help make things more consistent across the product. I still struggle, generally, with wanting to be right all the time. I want to correct all the wrong-ness in the world! And when it comes to design systems there’s so much sillyness and incorrectness and misbehavior that I want to sweep it all away with a wave of my hand.

But being useful is almost always better than being right. Both in life generally and also when it comes to our work in building sustainable and kind design systems.
