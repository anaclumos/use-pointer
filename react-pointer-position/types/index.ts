export type PointerEventType = {
  pointerEventPointerId: number | undefined // Read only. A unique identifier for the pointer causing the event.
  pointerEventWidth: number | undefined // Read only. The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.
  pointerEventHeight: number | undefined // Read only. The height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.
  pointerEventPressure: number | undefined // Read only. The normalized pressure of the pointer input in the range 0 to 1, where 0 and 1 represent the minimum and maximum pressure the hardware is capable of detecting, respectively.
  pointerEventTangentialPressure: number | undefined // Read only. The normalized tangential pressure of the pointer input (also known as barrel pressure or cylinder stress) in the range -1 to 1, where 0 is the neutral position of the control.
  pointerEventTiltX: number | undefined // Read only. The plane angle (in degrees, in the range of -90 to 90) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis.
  pointerEventTiltY: number | undefined // Read only. The plane angle (in degrees, in the range of -90 to 90) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis.
  pointerEventTwist: number | undefined // Read only. The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range 0 to 359.
  pointerEventPointerType: string | undefined // Read only. Indicates the device type that caused the event (mouse, pen, touch, etc.)
  pointerEventIsPrimary: boolean | undefined // Read only. Indicates if the pointer represents the primary pointer of this pointer type.
  mouseEventAltKey: boolean | undefined // Read only. Returns true if the alt key was down when the mouse event was fired.
  mouseEventButton: number | undefined // Read only. The button number that was pressed (if applicable) when the mouse event was fired.
  mouseEventButtons: number | undefined // Read only. The buttons being depressed (if any) when the mouse event was fired.
  mouseEventClientX: number | undefined // Read only. The X coordinate of the mouse pointer in local (DOM content) coordinates.
  mouseEventClientY: number | undefined // Read only. The Y coordinate of the mouse pointer in local (DOM content) coordinates.
  mouseEventCtrlKey: boolean | undefined // Read only. Returns true if the control key was down when the mouse event was fired.
  mouseEventMetaKey: boolean | undefined // Read only. Returns true if the meta key was down when the mouse event was fired.
  mouseEventMovementX: number | undefined // Read only. The X coordinate of the mouse pointer relative to the position of the last mousemove event.
  mouseEventMovementY: number | undefined // Read only. The Y coordinate of the mouse pointer relative to the position of the last mousemove event.
  mouseEventOffsetX: number | undefined // Read only. The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.
  mouseEventOffsetY: number | undefined // Read only. The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.
  mouseEventPageX: number | undefined // Read only. The X coordinate of the mouse pointer relative to the whole document.
  mouseEventPageY: number | undefined // Read only. The Y coordinate of the mouse pointer relative to the whole document.
  mouseEventRelatedTarget: EventTarget | null | undefined // Read only. The secondary target for the event, if there is one.
  mouseEventScreenX: number | undefined // Read only. The X coordinate of the mouse pointer in global (screen) coordinates.
  mouseEventScreenY: number | undefined // Read only. The Y coordinate of the mouse pointer in global (screen) coordinates.
  mouseEventShiftKey: boolean | undefined // Read only. Returns true if the shift key was down when the mouse event was fired.
}
