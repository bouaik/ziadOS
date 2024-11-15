import { ctx } from "../main"
import Desktop from "./Desktop"
import Icon from "./Icon"
import Taskbar from "./Taskbar"

export default class Os {
  static start() {
    this.draw()
  }

  static draw() {
    Desktop.start()
    this.animate()
  }

  static animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    Desktop.icons.forEach((icon) => icon.draw())
    Taskbar.start()

    requestAnimationFrame(() => this.animate())
  }
}
