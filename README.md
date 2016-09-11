# swipe.js

## Intro

```
滑动插件1.0,支持上下/左右滑动,兼容手机跟ie9
```

## Example

**Visit the [demo page](http://s.codepen.io/N-feng/debug/pEJpgb/)**

## Options

```js
/**
 * swipe 
 * @param {[String]} 			direction			Could be 'horizontal' or 'vertical' (for vertical slider).
 * @param {[Boolean]} 			navigation 			Display "next" and "prev" buttons
 * @param {[Boolean]} 			pagination 			Show pagination
 * @param {[Boolean]} 			paginationNumbers 	Show numbers inside pagination buttons
 * @param {[Int]/[Boolean]} 	autoPlay 			Change to any integrer for example autoPlay.
 * @param {[Boolean]} 			stopOnHover 		Stop autoplay on mouse hover
 */
```

## Methods

```js
/**
 * swipe
 * @method [prev] 		Go to previous slide
 * @method [next]  		Go to next slide
 * @method [goTo]  		Go to x slide
 * @method [jumpTo] 	Go to x slide without slide animation
 */
```

## Attention

```
因为item(一屏分开几个item)不常用所以这一版没有收纳，如果业务必须需要，可放在2.0开发.
```

## Future

```
1、加入键盘事件
2、优化loop循环
```