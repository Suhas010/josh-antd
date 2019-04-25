React component example:

```js static
<Button
    size="large"
    name="Button"
    type="primary"
    onClick={onClickHandler} // function
    {...rest} // please refer ant/button for more props details
/>
```

You can add tooltip to button

```js static
<Button
    tooltip="This is a tooltip"
/>
```

Or disable an editor by passing a `disabled` modifier:

```jsx static
<Button disabled={true} />
```
