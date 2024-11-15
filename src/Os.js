import { ctx } from "../main"
import Icon from "./Icon"
import Taskbar from "./Taskbar"

export default class Os {
  static icons = []

  static start() {
    this.draw()
  }

  static draw() {
    const icon1 = new Icon(10, 10, 50, 50)
    const icon2 = new Icon(10, 90, 50, 50)
    this.icons.push(icon1)
    this.icons.push(icon2)

    this.animate()
  }

  static animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    this.icons.forEach((icon) => icon.draw())
    Taskbar.start()

    requestAnimationFrame(() => this.animate())
  }
}
