在不同上下文中 false 的渲染:

被渲染成 id="false":
```js
React.render(<div id={false} />, mountNode);

String "false" as input value:
```  


input value 的值将会是 "false" 字符串

```js
React.render(<input value={false} />, mountNode);
```  


没有子节点

```js
React.render(<div>{false}</div>, mountNode);
```  


上面这个没有被渲染成 "false" 字符串是应为要考虑到这种常见的情况：```js
<div>{x > 1 && 'You have more than one item'}</div>
```  
