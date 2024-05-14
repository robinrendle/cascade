---
title: "You Want border-color: transparent, Not border: none"
date: 2024-05-06
tags:
  - high contrast mode
  - dave rupert
  - accessibility
---

Great tip from [Dave Rupert](https://frontendmasters.com/blog/you-want-border-color-transparent-not-border-none/):

> If you find yourself removing a border from an element that has a border and are tempted to use border: 0 , border: none, or outline: none, I’d urge you to stop for a moment and reconsider.

Switching to `border-color: transparent` makes inputs and buttons much more visible in High Contrast Mode. Huh.
