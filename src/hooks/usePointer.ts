import { useState, useEffect } from 'react'
import { PointerEventType } from '../types'

const usePointer = () => {
  const [pointer, setPointer] = useState<PointerEventType>({
    pointerEventPointerId: undefined,
    pointerEventWidth: undefined,
    pointerEventHeight: undefined,
    pointerEventPressure: undefined,
    pointerEventTangentialPressure: undefined,
    pointerEventTiltX: undefined,
    pointerEventTiltY: undefined,
    pointerEventTwist: undefined,
    pointerEventPointerType: undefined,
    pointerEventIsPrimary: undefined,
    mouseEventAltKey: undefined,
    mouseEventButton: undefined,
    mouseEventButtons: undefined,
    mouseEventClientX: undefined,
    mouseEventClientY: undefined,
    mouseEventCtrlKey: undefined,
    mouseEventMetaKey: undefined,
    mouseEventMovementX: undefined,
    mouseEventMovementY: undefined,
    mouseEventOffsetX: undefined,
    mouseEventOffsetY: undefined,
    mouseEventPageX: undefined,
    mouseEventPageY: undefined,
    mouseEventRelatedTarget: undefined,
    mouseEventScreenX: undefined,
    mouseEventScreenY: undefined,
    mouseEventShiftKey: undefined,
  })

  const updatePointerPosition = (e: PointerEvent) => {
    setPointer({
      pointerEventPointerId: e.pointerId,
      pointerEventWidth: e.width,
      pointerEventHeight: e.height,
      pointerEventPressure: e.pressure,
      pointerEventTangentialPressure: e.tangentialPressure,
      pointerEventTiltX: e.tiltX,
      pointerEventTiltY: e.tiltY,
      pointerEventTwist: e.twist,
      pointerEventPointerType: e.pointerType,
      pointerEventIsPrimary: e.isPrimary,
      mouseEventAltKey: e.altKey,
      mouseEventButton: e.button,
      mouseEventButtons: e.buttons,
      mouseEventClientX: e.clientX,
      mouseEventClientY: e.clientY,
      mouseEventCtrlKey: e.ctrlKey,
      mouseEventMetaKey: e.metaKey,
      mouseEventMovementX: e.movementX,
      mouseEventMovementY: e.movementY,
      mouseEventOffsetX: e.offsetX,
      mouseEventOffsetY: e.offsetY,
      mouseEventPageX: e.pageX,
      mouseEventPageY: e.pageY,
      mouseEventRelatedTarget: e.relatedTarget,
      mouseEventScreenX: e.screenX,
      mouseEventScreenY: e.screenY,
      mouseEventShiftKey: e.shiftKey,
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
