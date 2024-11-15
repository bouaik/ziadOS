import { ctx, canvas } from "../main"

export default class Icon {
  constructor(x, y, w, h) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h

    this.isDragging = false
    this.offsetX = 0
    this.offsetY = 0

    this.addMouseListeners()
  }

  draw() {
    ctx.fillStyle = "blue"
    ctx.fillRect(this.x, this.y, this.w, this.h)
  }

  isMouseOver(mx, my) {
    return (
      mx >= this.x &&
      mx <= this.x + this.w &&
      my >= this.y &&
      my <= this.y + this.h
    )
  }

  addMouseListeners() {
    canvas.addEventListener("mousedown", (e) => {
      const rect = canvas.getBoundingClientRect()
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top

      if (this.isMouseOver(mouseX, mouseY)) {
        this.isDragging = true
        this.offsetX = mouseX - this.x
        this.offsetY = mouseY - this.y
      }
    })

    canvas.addEventListener("mousemove", (e) => {
      if (this.isDragging) {
        const rect = canvas.getBoundingClientRect()
        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        this.x = mouseX - this.offsetX
        this.y = mouseY - this.offsetY
      }
    })

    canvas.addEventListener("mouseup", () => {
      this.isDragging = false
    })
  }
}
