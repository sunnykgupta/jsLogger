jsLogger
========

A simple JS Logger with support to override and disable default javascript logging.

On production servers, we generally try to avoid console.log statements. In real world scenarios code sometimes reaches the production servers with such lines of code. Browsers which do not support `console` implementations would then throw a silent error for the JS and stop further execution.

This plugin allows you to override such scenarios.

![Peace](https://media.giphy.com/media/3o6ZtkTgKTiLUTs62s/giphy.gif "Peace yo!")
