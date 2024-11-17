import { ctx, canvas } from "../main"

export default class Icon {
  constructor(x, y, w, h, name) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.name = name

    this.isDragging = false
    this.offsetX = 0
    this.offsetY = 0

    this.addMouseListeners()
  }

  draw() {
    ctx.fillStyle = "lightblue"
    ctx.fillRect(this.x, this.y, this.w, this.h)
    ctx.strokeStyle = "blue"
    ctx.strokeRect(this.x, this.y, this.w, this.h)

    const text = this.name
    ctx.font = "12px Arial"
    ctx.fillStyle = "#000"
    ctx.textAlign = "center"
    ctx.textBaseline = "middle"

    const textX = this.x + this.w / 2
    const textY = this.y + this.h + 10
    ctx.fillText(text, textX, textY)
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
