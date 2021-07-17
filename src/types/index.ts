export type PointerEventType = {
  pointerId: number | undefined // Read only. A unique identifier for the pointer causing the event.
  width: number | undefined // Read only. The width (magnitude on the X axis), in CSS pixels, of the contact geometry of the pointer.
  height: number | undefined // Read only. The height (magnitude on the Y axis), in CSS pixels, of the contact geometry of the pointer.
  pressure: number | undefined // Read only. The normalized pressure of the pointer input in the range 0 to 1, where 0 and 1 represent the minimum and maximum pressure the hardware is capable of detecting, respectively.
  tangentialPressure: number | undefined // Read only. The normalized tangential pressure of the pointer input (also known as barrel pressure or cylinder stress) in the range -1 to 1, where 0 is the neutral position of the control.
  tiltX: number | undefined // Read only. The plane angle (in degrees, in the range of -90 to 90) between the Y–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the Y axis.
  tiltY: number | undefined // Read only. The plane angle (in degrees, in the range of -90 to 90) between the X–Z plane and the plane containing both the pointer (e.g. pen stylus) axis and the X axis.
  twist: number | undefined // Read only. The clockwise rotation of the pointer (e.g. pen stylus) around its major axis in degrees, with a value in the range 0 to 359.
  pointerType: string | undefined // Read only. Indicates the device type that caused the event (mouse, pen, touch, etc.)
  isPrimary: boolean | undefined // Read only. Indicates if the pointer represents the primary pointer of this pointer type.
  altKey: boolean | undefined // Read only. Returns true if the alt key was down when the mouse event was fired.
  button: number | undefined // Read only. The button number that was pressed (if applicable) when the mouse event was fired.
  buttons: number | undefined // Read only. The buttons being depressed (if any) when the mouse event was fired.
  clientX: number | undefined // Read only. The X coordinate of the mouse pointer in local (DOM content) coordinates.
  clientY: number | undefined // Read only. The Y coordinate of the mouse pointer in local (DOM content) coordinates.
  ctrlKey: boolean | undefined // Read only. Returns true if the control key was down when the mouse event was fired.
  metaKey: boolean | undefined // Read only. Returns true if the meta key was down when the mouse event was fired.
  movementX: number | undefined // Read only. The X coordinate of the mouse pointer relative to the position of the last mousemove event.
  movementY: number | undefined // Read only. The Y coordinate of the mouse pointer relative to the position of the last mousemove event.
  offsetX: number | undefined // Read only. The X coordinate of the mouse pointer relative to the position of the padding edge of the target node.
  offsetY: number | undefined // Read only. The Y coordinate of the mouse pointer relative to the position of the padding edge of the target node.
  pageX: number | undefined // Read only. The X coordinate of the mouse pointer relative to the whole document.
  pageY: number | undefined // Read only. The Y coordinate of the mouse pointer relative to the whole document.
  relatedTarget: EventTarget | null | undefined // Read only. The secondary target for the event, if there is one.
  screenX: number | undefined // Read only. The X coordinate of the mouse pointer in global (screen) coordinates.
  screenY: number | undefined // Read only. The Y coordinate of the mouse pointer in global (screen) coordinates.
  shiftKey: boolean | undefined // Read only. Returns true if the shift key was down when the mouse event was fired.
}
