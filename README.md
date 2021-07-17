# usePointer

React Hooks that binds HTML5 MouseEvents to React Components

## Demo

Visit [https://use-pointer.vercel.app](https://use-pointer.vercel.app)

## Usage

- I want usePointer to update real-time: set `debounce` to `0`.
  - I want usePointer to update real-time, but only 10 times a second: set `debounce` to `0` and `throttle` to `100`(ms).
- I want usePointer to update when mouse is idle for 100ms: set `debounce` to `100`

```tsx
const {
  pointerId,
  width,
  height,
  pressure,
  tangentialPressure,
  tiltX,
  tiltY,
  twist,
  pointerType,
  isPrimary,
  altKey,
  button,
  buttons,
  clientX,
  clientY,
  ctrlKey,
  metaKey,
  movementX,
  movementY,
  offsetX,
  offsetY,
  pageX,
  pageY,
  relatedTarget,
  screenX,
  screenY,
  shiftKey,
} = usePointer({
  throttle: 0,
  debounce: 0,
})
```

or visit [`./src/pages/index.tsx`](./src/pages/index.tsx)
