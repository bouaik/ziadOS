import { ctx } from "../main"

export default class Window {
  constructor(x, y, w, h, title, id) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.title = title
    this.id = id
  }

  draw() {
    const closeButtonSize = 20
    const resizeHandleSize = 10
    ctx.fillStyle = "#fff"
    ctx.fillRect(this.x, this.y, this.w, this.h)
    ctx.strokeStyle = "#000"
    ctx.strokeRect(this.x, this.y, this.w, this.h)

    ctx.fillStyle = "#000"
    ctx.font = "16px Arial"
    ctx.textAlign = "start"
    ctx.fillText(this.title, this.x + 5, this.y + 20)

    ctx.strokeStyle = "#000"
    ctx.strokeRect(
      this.x + this.w - closeButtonSize - 5,
      this.y + 5,
      closeButtonSize,
      closeButtonSize
    )
    ctx.fillStyle = "#000"
    ctx.font = "14px Arial"
    ctx.fillText(
      "X",
      this.x + this.w - closeButtonSize + 1,
      this.y + closeButtonSize - 3
    )

    ctx.fillStyle = "gray"
    ctx.fillRect(
      this.x + this.w - resizeHandleSize,
      this.y + this.h - resizeHandleSize,
      resizeHandleSize,
      resizeHandleSize
    )
  }
}
