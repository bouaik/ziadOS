import { ctx } from "../main"

export default class Taskbar {
  static start() {
    const taskbarHeight = 50
    const taskbarColor = "#333"
    const startButtonColor = "#0078D7"
    const iconColor = "#FFF"
    const iconSize = 24
    const iconSpacing = 40

    ctx.fillStyle = taskbarColor
    ctx.fillRect(0, canvas.height - taskbarHeight, canvas.width, taskbarHeight)

    ctx.fillStyle = startButtonColor
    ctx.fillRect(10, canvas.height - taskbarHeight + 13, iconSize, iconSize)

    ctx.fillStyle = iconColor
    for (let i = 1; i <= 5; i++) {
      ctx.beginPath()
      ctx.arc(
        10 + iconSpacing * i,
        canvas.height - taskbarHeight / 2,
        iconSize / 2,
        0,
        Math.PI * 2
      )
      ctx.fill()
    }
  }
}
