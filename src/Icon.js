import { ctx, canvas } from "../main"
import Desktop from "./Desktop"
import Window from "./Window"

export default class Icon {
  constructor(x, y, w, h, label, id) {
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.label = label
    this.id = id

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

    const text = this.label
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

  handleDoubleClick(icon) {
    const existingWindow = Desktop.windows.find(
      (win) => win.id === `win_${icon.id}`
    )
    if (!existingWindow) {
      const newWindow = new Window(
        200,
        100,
        300,
        200,
        icon.label,
        `win_${icon.id}`
      )
      Desktop.windows.push(newWindow)
    }
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

    canvas.addEventListener("dblclick", (e) => {
      const { offsetX, offsetY } = e
      const clickedIcon = Desktop.icons.find(
        (icon) =>
          offsetX >= icon.x &&
          offsetX <= icon.x + icon.w &&
          offsetY >= icon.y &&
          offsetY <= icon.y + icon.h
      )
      if (clickedIcon) {
        this.handleDoubleClick(clickedIcon)
      }
    })
  }
}
