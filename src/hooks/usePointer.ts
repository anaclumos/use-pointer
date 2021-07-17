import { useState, useEffect } from 'react'
import { PointerEventType } from '../types'

const usePointer = () => {
  const [pointer, setPointer] = useState<PointerEventType>({
    pointerId: undefined,
    width: undefined,
    height: undefined,
    pressure: undefined,
    tangentialPressure: undefined,
    tiltX: undefined,
    tiltY: undefined,
    twist: undefined,
    pointerType: undefined,
    isPrimary: undefined,
    altKey: undefined,
    button: undefined,
    buttons: undefined,
    clientX: undefined,
    clientY: undefined,
    ctrlKey: undefined,
    metaKey: undefined,
    movementX: undefined,
    movementY: undefined,
    offsetX: undefined,
    offsetY: undefined,
    pageX: undefined,
    pageY: undefined,
    relatedTarget: undefined,
    screenX: undefined,
    screenY: undefined,
    shiftKey: undefined,
  })

  const updatePointerPosition = (e: PointerEvent) => {
    setPointer({
      pointerId: e.pointerId,
      width: e.width,
      height: e.height,
      pressure: e.pressure,
      tangentialPressure: e.tangentialPressure,
      tiltX: e.tiltX,
      tiltY: e.tiltY,
      twist: e.twist,
      pointerType: e.pointerType,
      isPrimary: e.isPrimary,
      altKey: e.altKey,
      button: e.button,
      buttons: e.buttons,
      clientX: e.clientX,
      clientY: e.clientY,
      ctrlKey: e.ctrlKey,
      metaKey: e.metaKey,
      movementX: e.movementX,
      movementY: e.movementY,
      offsetX: e.offsetX,
      offsetY: e.offsetY,
      pageX: e.pageX,
      pageY: e.pageY,
      relatedTarget: e.relatedTarget,
      screenX: e.screenX,
      screenY: e.screenY,
      shiftKey: e.shiftKey,
    })
  }
  useEffect(() => {
    window.addEventListener(
      'pointermove',
      updatePointerPosition
    )
    return () =>
      window.removeEventListener(
        'pointermove',
        updatePointerPosition
      )
  }, [])
  return pointer
}

export default usePointer
